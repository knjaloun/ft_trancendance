import type { Request, Response } from 'express'
import { validateBodyorThrow } from '#emailVeri/services/validateBodyorThrow.js';
import {validateActivationLinkResendRequest} from '#emailVeri/services/resend.js'
import { sendVerificationMail } from '#emailVeri/services/sendVerificationMail.js';
import { HttpError } from '#errors/HttpError.js';

export async function resendEmailController(req: Request, res: Response) {
    const { email } = req.body;

    try {
        await validateBodyorThrow(email);
        const token : string = await validateActivationLinkResendRequest(email);
        await sendVerificationMail(token, email);
        res.json({message: 'ok'})
    }
    catch(err) {
        if (err instanceof HttpError)
        {
            res.status(err.status_code).json({message : err.message})
            return;
        }
        res.status(400).json({message : 'unknownError'})
    }
}
