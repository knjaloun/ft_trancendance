import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
  
const poolConnection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "trancendance",
});
export const db = drizzle({ client: poolConnection });


