
import type { HttpError } from '#errors/HttpError.js'
import type { Response, Request } from 'express'
import { validateTwoFactorAuthBodyOrThrow } from '#2fa/services/validateTwoFactorAuthBodyOrThrow.js'
import { verifyandGet2FaCode } from '#2fa/services/resend2fa.js';
import { addToEmailQueue } from '#jobs/Queues/EmailQueue.js';
export async function TwoFactorAuthResendController(req: Request, res: Response)
{
    const {email} = req.body;
    try
    {
        console.log('hallo');
        await validateTwoFactorAuthBodyOrThrow(email, '2faRefreshOrResend')
        const code = await verifyandGet2FaCode(email)
        await addToEmailQueue(email, 'send2faMail', code)
        res.status(202).json({message: 'ok'})
    } catch(err)
    {
        res.status((err as HttpError).status_code).json({message: (err as HttpError).message})
    }
}