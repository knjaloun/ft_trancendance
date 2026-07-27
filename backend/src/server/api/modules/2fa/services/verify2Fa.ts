
import { HttpError } from "#errors/HttpError.js";
import { TwoFactorAuthModel } from "#models/TwoFactorAuthModel.js";
import { UserModel } from "#models/UserModel.js";
import jwt from "jsonwebtoken";


async function getUserIdFromDbByEmail(email: string): Promise<number | null> {
    const user_model = new UserModel();

    const user_id: number | undefined = await user_model.getId(email);
    return (user_id ?? null)

}
/**
 * get the 9 digit fa code from the db 
 * @param user_id id of the user
 * @returns  null when retrieving data from db failed, if token verification failed a string with the value 
 * CodeExpiredError or TokenError will be returned otherwise it returns the code
 */
async function get2FaCodeFromDb(user_id: number): Promise<string | null> {
    const two_fa_model = new TwoFactorAuthModel();

    const token = await two_fa_model.getUserTokenById(user_id);
    if (!token)
        return (null)
    try {
        const code = (jwt.verify(token, String(process.env.JWT_SECRET)) as jwt.JwtPayload).code;
        return (code ?? null)
    }
    catch (err) {
        if ((err as HttpError).name === 'TokenExpiredError')
            return ('CodeExpiredError')
        return ('TokenError');
    }
}

export async function verify2FaCode(email: string, user_code:string) {
    const user_id = await getUserIdFromDbByEmail(email);

    if (!user_id)
        throw new HttpError('InvalidUserError', 401);

    const code = await get2FaCodeFromDb(user_id);
    if (!code)
        throw new HttpError('ServerError', 500);
    if (code === 'CodeExpiredError' || code === 'TokenError')
        throw new HttpError(code, 401);
    if (user_code !== code)
        throw new HttpError('InvalidCodeError', 401);
}