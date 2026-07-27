import type { Response, Request } from 'express'
import { HttpError } from '#errors/HttpError.js';
import { validateTwoFactorAuthBodyOrThrow } from '#2fa/services/validateTwoFactorAuthBodyOrThrow.js';

export async function twoFactorAuthController(req: Request, res: Response) {
    const { email, code } = req.body;

    try {

        await validateTwoFactorAuthBodyOrThrow(email ?? '', code ?? '');
       
        res.status(200).json({message: 'ok'})
    } catch (err) {
        res.status((err as HttpError).status_code).json({message: (err as HttpError).message})
    }
}