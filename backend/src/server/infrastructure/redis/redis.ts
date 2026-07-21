import {Redis} from 'ioredis';
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";


const env = dotenv.config({ path: "../../../../../.env" })
dotenvExpand.expand(env);


if (!process.env.REDIS_HOST)
{
    console.log('ERROR: redis envs not loaded');
    process.exit();
}
export const redis_connection = new Redis({maxRetriesPerRequest: null,
                                            host: process.env.REDIS_HOST,
                                            port: Number(process.env.REDIS_PORT)
})