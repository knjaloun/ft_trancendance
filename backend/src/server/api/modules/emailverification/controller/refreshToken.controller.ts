
import type {Request, Response} from 'express'
import { refreshJwtTAndVerify} from '#emailVeri/services/refresh.js';
import { HttpError } from '#errors/HttpError.js';
import { addToEmailQueue } from '#jobs/Queues/EmailQueue.js';
export async function refreshJwtTokenController(req:Request, res:Response)
{
   const {token} = req.body;
   try
   {
        const data = await refreshJwtTAndVerify(String(token));
        await addToEmailQueue(data.email, 'sendAccountActivationMail', data.token)
        res.status(202).json({message: 'ok'})
   }
   catch(err)
   {
        console.log((err as HttpError).message)
        res.status((err as HttpError).status_code).json({message: (err as HttpError).message});
   }
}