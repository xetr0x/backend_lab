import mariadb from "mariadb";
import dotenv from "dotenv";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "backend_lab",
  connectionLimit: 5,
});

export default pool;
