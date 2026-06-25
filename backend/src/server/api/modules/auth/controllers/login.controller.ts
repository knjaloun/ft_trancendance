import type{Response, Request} from 'express'

export async function loginController(req:Request, res:Response)
{
    res.status(200),
    req.body
}