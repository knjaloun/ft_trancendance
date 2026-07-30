
import { HttpError } from "#errors/HttpError.js";
import {getUserIdFromDbByEmail, get2FaCodeFromDb} from '#2fa/utils/getData.js'



export async function verify2FaCode(email: string, user_code:string) : Promise<number> {
    const user_id = await getUserIdFromDbByEmail(email);

    if (!user_id)
        throw new HttpError('InvalidUserError', 401);

    const code = await get2FaCodeFromDb(user_id);
    if (!code)
        throw new HttpError('InvalidCodeError', 401);
    if (code === 'CodeExpiredError' || code === 'TokenError')
        throw new HttpError(code, 401);
    if (user_code !== code)
        throw new HttpError('InvalidCodeError', 401);
    return (user_id)
}