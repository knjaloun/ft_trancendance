import type { Response, Request } from 'express'
import { HttpError } from '#errors/HttpError.js';
import { validateTwoFactorAuthBodyOrThrow } from '#2fa/services/validateTwoFactorAuthBodyOrThrow.js';
import { verify2FaCode } from '#2fa/services/verify2Fa.js';
//import { invalidate2FaCode } from '#2fa/services/delete2fa.js';

export async function twoFactorAuthController(req: Request, res: Response) {
    const { email, code } = req.body;


    console.log(req.session.user_id)

    try {
        await validateTwoFactorAuthBodyOrThrow(email ?? '', '2faVerify', code ?? '');
        const user_id = await verify2FaCode(email, code);
        //await invalidate2FaCode(user_id);
        req.session.user_id = user_id
        res.status(200).json({message: 'ok'})
    } catch (err) {
        res.status((err as HttpError).status_code).json({message: (err as HttpError).message})
    }
}