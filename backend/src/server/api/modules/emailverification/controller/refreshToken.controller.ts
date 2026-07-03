
import type {Request, Response} from 'express'
import { refreshJwtT } from '#emailVeri/services/refresh.js';
import { HttpError } from '#errors/HttpError.js';
export async function refreshJwtTokenController(req:Request, res:Response)
{
   const {token} = req.query;
   try
   {
        await refreshJwtT(String(token));
        res.send('user token was refreshed');
   }
   catch(err)
   {
        console.log((err as HttpError).message)
        res.status((err as HttpError).status_code).send((err as HttpError).message)
   }
}