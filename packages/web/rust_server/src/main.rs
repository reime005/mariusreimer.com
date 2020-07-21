#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate lazy_static;

use rocket_contrib::serve::StaticFiles;
use rocket::Request;
use std::env;
use regex::Regex;

use std::result::Result;

static APP_USER_AGENT: &str = "test";

lazy_static! {
    static ref RE: Regex = Regex::new(r"^(/gist/)([a-z0-9]{20,})").unwrap();
}

#[catch(404)]
fn not_found(req: &Request) -> Result<String, reqwest::Error> {
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

    let response = client
        .get(&request_url)
        .header("Authorization", auth_header)
        .send()?
        .text();

    response

}

fn main() {
    rocket::ignite().register(catchers![not_found]).launch();
    rocket::ignite().mount("/gist", StaticFiles::from("./gists")).launch();
}
