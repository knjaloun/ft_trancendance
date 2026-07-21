import { Queue } from "bullmq";
import { redis_connection } from "#infra/redis/redis.js";

const email_queue = new Queue('emailQueue', {connection: redis_connection})

export async function addToEmailQueue(email:string, job:string)
{
    await email_queue.add(job, {email: email})
}

