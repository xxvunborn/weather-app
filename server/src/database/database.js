const { Client } = require("pg");

const client = new Client({
  user: proces.env.POSTGRES_USER || "root",
  host: process.env.POSTGREST_HOST || "localhost",
  database: process.env.POSTGRES_DATABASE || "weather",
  password: process.env.POSTGRES_PASSWORD || "",
  port: proces.env.POSTGRES_PORT || 5432
});

await client.connect();

module.exports = client;
