import { client } from "./db";

async function main() {
  console.log("Indexer started...");
  while (true) {
    await client.query("SELECT 1");
    await new Promise(res => setTimeout(res, 2000));
  }
}

main();
