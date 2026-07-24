import { redis_connection } from "#infra/redis/redis.js";
import { Worker } from "bullmq";

const worker = new Worker('activationLinkSendQueue', 
    async job => {
        console.log(job.data)

    }, {connection: redis_connection})

worker.on("ready", () => {
  console.log("Worker connected");
});

worker.on("error", err => {
  console.error("Worker error:", err);
});

worker.on("completed", job => {
  console.log(`${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`${job?.id} failed:`, err);
});