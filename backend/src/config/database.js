import { Pool } from "pg"
import "dotenv/config"

const db_name = process.env.PG_DATABASE 
const db_host = process.env.PG_HOST
const db_user = process.env.PG_USER || "postgres"
const db_port = process.env.PG_PORT
const db_password = process.env.PG_PASSWORD


const pool = new Pool({
  host: db_host,
  user: db_user,
  port: db_port,
  password: db_password,
  database: db_name,
});

export default pool;