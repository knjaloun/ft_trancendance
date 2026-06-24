import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { defineConfig } from 'drizzle-kit';

const env = dotenv.config({path: '../../.env'})
dotenvExpand.expand(env)

export default defineConfig({
  out: './drizzle',
  schema: './drizzle/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.MYSQL_URL!,
  },
});