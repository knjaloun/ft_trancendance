
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

if (process.env.DB_ROOT_PSW === undefined)
    console.log('MYSQL PASSWORD MISSING ERROR');
const pool_connection = mysql.createPool({
  host: process.env.HOST!,
  user: "root",
  password: process.env.DB_ROOT_PSW!,
  database: "trancendance",
  port: Number(process.env.DB_PORT!)
});
export const db = drizzle({ client: pool_connection });