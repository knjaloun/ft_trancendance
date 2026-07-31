import type {Request, Response} from 'express'
import { markAccountAsVerified} from '#emailVeri/services/verify.js';
import {verifyJwtToken, checkIfTokenExists} from '#emailVeri/services/verify.js'
import type { HttpError } from '#errors/HttpError.js';
import { deleteVerification } from '#emailVeri/services/delete.js';

export async function EmailVerificationController(req: Request, res: Response)
{
    const {token} = req.body;
    
    try
    {
        await checkIfTokenExists(token)
        const user_id  = await verifyJwtToken(String(token))
        await markAccountAsVerified(user_id ?? undefined)
        await deleteVerification(user_id!)     
         res.json({message: 'ok'});
    }
    catch (err)
    {
        res.status((err as HttpError).status_code).json({message : `${(err as HttpError).message}`})
    } 
}