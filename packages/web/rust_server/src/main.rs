#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate lazy_static;

use regex::Regex;
use rocket::Request;
use rocket::config::{Config, Environment};
use rocket_contrib::serve::StaticFiles;
use rocket::response::{self, Response, Responder};
use rocket::http::Header;
use std::env;
use std::fs::File;
use std::io::prelude::*;
use std::path::Path;
use std::result::Result;
use std::io::Cursor;
use rocket_cors::{AllowedHeaders, AllowedOrigins, Error, Guard};

use rocket::http::Method;

static APP_USER_AGENT: &str = "test";
static ROOT_PATH: &str = "./gists";

lazy_static! {
    static ref RE: Regex = Regex::new(r"^(/gist/)([a-z0-9]{20,})").unwrap();
}

fn write_to_file(gist_id: &str, content: &str) -> () {
    let path_str = format!("{}/{}", ROOT_PATH, gist_id);
    let path = Path::new(&path_str);
    let display = path.display();

    // Open a file in write-only mode, returns `io::Result<File>`
    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}", display, why),
        Ok(file) => file,
    };

    // Write the content string to `file`, returns `io::Result<()>`
    match file.write_all(content.as_bytes()) {
        Err(why) => panic!("couldn't write to {}: {}", display, why),
        Ok(_) => println!("successfully wrote to {}", display),
    }
}


struct Test {
    text: String
}

impl<'r> Responder<'r> for Test {
    fn respond_to(self, _: &Request) -> response::Result<'r> {
        Response::build()
            .sized_body(Cursor::new(self.text))
            .raw_header("Access-Control-Allow-Origin", "https://mariusreimer.com")
            .ok()
    }
}

#[catch(404)]
fn not_found(req: &Request) -> Result<Test, reqwest::Error> {
    let gh_pass = env::var("GH_TOKEN").unwrap().to_string();

    let uri = req.uri().to_string();

    let capts = RE.captures(&uri).unwrap();

    let gist_id = &capts[2];

    let request_url = format!("https://api.github.com/gists/{}", gist_id);

    // std::println!("request_url: {}", request_url);
    // std::println!("gist_id: {}", gist_id);

    let auth_header = format!("token {}", gh_pass);

    let client = reqwest::blocking::Client::builder()
        .user_agent(APP_USER_AGENT)
        .build()?;

    let response_text = client
        .get(&request_url)
        .header("Authorization", auth_header)
        .send()?
        .text()
        .unwrap();


    write_to_file(gist_id, &response_text);

    let res = Test {
        text: response_text
    };

    Ok(res)
}

fn main() -> Result<(), Error> {
    let allowed_origins = AllowedOrigins::some_exact(&["https://mariusreimer.com"]);

    // You can also deserialize this
    let cors = rocket_cors::CorsOptions {
        allowed_origins,
        allowed_methods: vec![Method::Get].into_iter().map(From::from).collect(),
        allowed_headers: AllowedHeaders::some(&["Authorization", "Accept"]),
        ..Default::default()
    }
    .to_cors()?;

    let args: Vec<String> = env::args().collect();

    let port = &args[1];
    let cert = &args[2];
    let key = &args[3];

    let mut config = Config::build(Environment::Staging)
        .address("0.0.0.0")
        .port(port.parse::<u16>().unwrap())
        .finalize()
        .unwrap();

    config.set_tls(cert, key).unwrap();

    rocket::custom(config)
        .mount("/gist", StaticFiles::from("./gists"))
        .manage(cors)
        .register(catchers![not_found])
        .launch();

    Ok(())
}
