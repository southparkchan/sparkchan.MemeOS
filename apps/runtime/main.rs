use axum::{routing::post, Router, Json};
use serde::{Serialize, Deserialize};

#[derive(Deserialize)]
struct MemePayload {
    text: String,
    style: String,
}

#[derive(Serialize)]
struct MemeResult {
    ok: bool,
    message: String,
}

async fn create(Json(payload): Json<MemePayload>) -> Json<MemeResult> {
    Json(MemeResult {
        ok: true,
        message: format!("Meme created: {}", payload.text),
    })
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/create", post(create));
    println!("Runtime running on 0.0.0.0:8080");
    axum::Server::bind(&"0.0.0.0:8080".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
