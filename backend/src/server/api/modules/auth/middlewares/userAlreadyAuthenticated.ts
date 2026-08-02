import type {Response, Request, NextFunction} from 'express'

export async function userAlreadyAuthenticated(req: Request, res: Response, next:NextFunction)
{
    console.log(req.session.user_id)
    if (req.session.user_id)
    {
        res.json({message: 'AlreadyAuthenticated'})
        return;
    }
    next();
}