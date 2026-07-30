import { Redis } from 'ioredis';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

if (!process.env.REDIS_HOST) {
  const env = dotenv.config({ path: '../.env' });
  dotenvExpand.expand(env);
}
export const redis_connection = new Redis({
  maxRetriesPerRequest: null,
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
});
