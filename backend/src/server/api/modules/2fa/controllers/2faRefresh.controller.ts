import type { Response, Request } from 'express'
import {validateTwoFactorAuthBodyOrThrow} from '#2fa/services/validateTwoFactorAuthBodyOrThrow.js'
import { createOrReplaceTwoFactorAuthAndValidate } from '#2fa/services/create2fa.js';
import { addToEmailQueue } from '#jobs/Queues/EmailQueue.js';
import type { HttpError } from '#errors/HttpError.js';

export async function twoFactorAuthRefreshController(req: Request, res: Response)
{
    const {email} = req.body;
    try
    {
        await validateTwoFactorAuthBodyOrThrow(email, '2faRefreshOrResend');
        const code:string = await createOrReplaceTwoFactorAuthAndValidate(email);
        await addToEmailQueue(email, 'send2faMail', code)
        res.status(202).json({message: 'ok'});
    }catch(err)
    {
        res.status((err as HttpError).status_code).json({message: (err as HttpError).message})
    }
}