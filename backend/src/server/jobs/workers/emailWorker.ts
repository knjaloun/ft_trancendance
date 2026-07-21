import { Worker , type Job} from "bullmq";
import { redis_connection } from "#infra/redis/redis.js";
import { createEmailVerification } from "#emailVeri/services/create.js";
import { sendVerificationMail } from "#emailVeri/services/sendVerificationMail.js";
import { HttpError } from "#errors/HttpError.js";

async function handleCreateEmailVerification(email:string)
{
    try{
        const token = await createEmailVerification(email);
        await sendVerificationMail(token, email);
    }catch(err)
    {
        console.log((err as HttpError).message)
    }
    
}
const email_worker = new Worker('emailQueue',
    async (job:Job) => {
        switch (job.name){
            case 'createEmailVerification':
                await handleCreateEmailVerification(job.data.email);
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