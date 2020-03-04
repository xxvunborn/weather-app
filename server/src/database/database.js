const { Client } = require("pg");

const client = new Client({
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.POSTGREST_HOST || "localhost",
  database: process.env.POSTGRES_DATABASE || "weather",
  password: process.env.POSTGRES_PASSWORD || "12345",
  port: process.env.POSTGRES_PORT || 5432
});

const postgres = () => {
  client.connect();
  return client;
};

module.exports = postgres();
