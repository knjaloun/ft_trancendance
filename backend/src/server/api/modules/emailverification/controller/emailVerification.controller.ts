import type {Request, Response} from 'express'
import { verifyJwtToken } from '#emailVeri/services/emailVerification.service.js';
import type { HttpError } from '#errors/HttpError.js';

export async function EmailVerificationController(req: Request, res: Response)
{
    const {token} = req.query;
    
    try
    {
        await verifyJwtToken(String(token))
         res.send('nothing');
    }
    catch (err)
    {
        console.log('bye');
        res.status((err as HttpError).status_code).send(`${(err as HttpError).message}`)
    }
   
}