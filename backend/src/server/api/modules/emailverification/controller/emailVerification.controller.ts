import type {Request, Response} from 'express'
import { markAccountAsVerified} from '#emailVeri/services/verify.js';
import {verifyJwtToken} from '#emailVeri/services/verify.js'
import type { HttpError } from '#errors/HttpError.js';

export async function EmailVerificationController(req: Request, res: Response)
{
    const {token} = req.query;
    
    try
    {
        const user_id  = await verifyJwtToken(String(token))
        await markAccountAsVerified(user_id ?? undefined)     
         res.send('account was activated');
    }
    catch (err)
    {
        console.log('bye');
        res.status((err as HttpError).status_code).send(`${(err as HttpError).message}`)
    } 
}