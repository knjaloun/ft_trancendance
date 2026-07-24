import {Queue} from 'bullmq';
import { redis_connection } from '#infra/redis/redis.js';


const email_send_activation_link_queue = new Queue('activationLinkSendQueue', {connection: redis_connection});

export async function addEmailSendingJob(email: string)
{   
    await email_send_activation_link_queue.add('sendActivationLink', {email: email});
    console.log('added job')
}   