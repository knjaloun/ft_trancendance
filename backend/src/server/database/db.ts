
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";


if (process.env.DB_ROOT_PSW! === undefined)
    console.log('MYSQL PASSWORD MISSING ERROR');
const poolConnection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: process.env.DB_ROOT_PSW!,
  database: "trancendance",
});
export const db = drizzle({ client: poolConnection });


