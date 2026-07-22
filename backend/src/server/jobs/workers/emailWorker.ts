import { Worker , type Job} from "bullmq";
import { redis_connection } from "#infra/redis/redis.js";
import { handleCreateEmailVerification } from "#jobs/jobHandlers/emailJobHandler.js";
import { handleEmailSend } from "#jobs/jobHandlers/emailJobHandler.js";
const email_worker = new Worker('emailQueue',
    async (job:Job) => {
        switch (job.name){
            case 'createEmailVerificationAndSendMail':
                await handleCreateEmailVerification(job.data.email);
                break;
        case 'sendMail':
            await handleEmailSend(job.data.email, job.data.token)
            break;
        default:
            console.log('no matching job found')
            break;

        }
        console.log(job.name)
        console.log(job.data)
    },
    {connection: redis_connection}                  
);

email_worker.on('completed', job => {
  console.log(`${job.id} has completed!`);
});

email_worker.on('failed', (job, err) => {
  console.log(`${job?.id} has failed with ${err.message}`);
});