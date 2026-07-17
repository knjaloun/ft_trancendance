import type {Request, Response} from 'express'
import { markAccountAsVerified} from '#emailVeri/services/verify.js';
import {verifyJwtToken} from '#emailVeri/services/verify.js'
import type { HttpError } from '#errors/HttpError.js';
import { deleteVerification } from '#emailVeri/services/delete.js';

export async function EmailVerificationController(req: Request, res: Response)
{
    const {token} = req.body;
    
    try
    {
        console.log('error at token verification');
        const user_id  = await verifyJwtToken(String(token))

          console.log('error at matking');
        await markAccountAsVerified(user_id ?? undefined)
          console.log('error at deleting verification');
        await deleteVerification(user_id!)     
         res.json({message: 'ok'});
    }
    catch (err)
    {
        res.status((err as HttpError).status_code).json({message : `${(err as HttpError).message}`})
    } 
}