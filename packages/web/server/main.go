package main

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"sync"
	"time"

	muxlogrus "github.com/pytimer/mux-logrus"
	"github.com/sirupsen/logrus"

	"github.com/google/go-github/github"
	"github.com/gorilla/mux"
	"golang.org/x/oauth2"
)

var log = logrus.New()
var lock sync.Mutex

func getGist(w http.ResponseWriter, r *http.Request) {
	pathParams := mux.Vars(r)
	w.Header().Set("Content-Type", "application/json")
	enableCors(&w)

	log.Infof("pathParams: %s", pathParams)

	gistID := ""
	if val, ok := pathParams["gistID"]; ok {
		if len(val) < 15 {
			log.Warnf("received: %s", val)
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(`{"message": "gist needs to be larger"}`))
			return
		}

		gistID = val
	}

	existingFile, err := ioutil.ReadFile(gistID)

	var data interface{}
	if err := json.Unmarshal(existingFile, &data); err == nil {
		w.WriteHeader(http.StatusAccepted)
		w.Write(existingFile)
		return
	}

	log.Infof("New gists request for %s", gistID)

	ctx := context.Background()
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: os.Getenv("GH_TOKEN")},
	)
	tc := oauth2.NewClient(ctx, ts)

	client := github.NewClient(tc)

	gist, _, err := client.Gists.Get(ctx, gistID)

	if err != nil {
		log.Errorf("received client gists error: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{"message": "api error"}`))
		return
	}

	if err := SaveFile(gistID, gist); err != nil {
		log.Errorf("received save file error: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{"message": "file system error"}`))
	}

	js, err := json.Marshal(gist)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusAccepted)
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(js))
}

// Save saves a representation of v to the file at path.
func SaveFile(path string, v interface{}) error {
	lock.Lock()
	defer lock.Unlock()

	jsonFile, err := os.Create(path)
	if err != nil {
		return err
	}

	log.Infof("created new file for: %s", path)

	// defer the closing of our jsonFile so that we can parse it later on
	defer jsonFile.Close()

	r, err := Marshal(v)
	if err != nil {
		return err
	}

	_, err = io.Copy(jsonFile, r)
	return err
}

// Marshal is a function that marshals the object into an
// io.Reader.
// By default, it uses the JSON marshaller.
var Marshal = func(v interface{}) (io.Reader, error) {
	b, err := json.Marshal(v)
	if err != nil {
		return nil, err
	}
	return bytes.NewReader(b), nil
}

// client is used to make HTTP requests with a 10 second timeout.
// http.Clients should be reused instead of created as needed.
var client = &http.Client{
	Timeout: 10 * time.Second,
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {
	log.Out = os.Stdout

	r := mux.NewRouter()
	r.HandleFunc("/gist/{gistID}", getGist).Methods(http.MethodGet)

	// add logger middleware
	r.Use(muxlogrus.NewLogger().Middleware)

	if len(os.Args) != 4 {
		log.Fatal("Missing arguments")
		return
	}

	port := os.Args[1]
	cert := os.Args[2]
	key := os.Args[3]

	log.Infof("Listen on port :%s", port)

	log.Fatal(http.ListenAndServeTLS(":"+port, cert, key, r))
}
