
import { HttpError } from "#errors/HttpError.js";
import jwt from 'jsonwebtoken'
import { UserModel } from "#models/UserModel.js";
import { EmailVerificationModel } from "#models/EmailVerificationModel.js";
export async function verifyJwtToken(token: string | undefined) : Promise<number | undefined>
{
    if (!token)
        throw new HttpError('Missing Jwt', 401);
    try
    {
        const email_verification_model = new EmailVerificationModel();
        const token_exists : boolean = await email_verification_model.tokenExists(token)
        console.log(`token exists : ${token_exists}`)
        if (!token_exists)
        {
            throw new HttpError('invalid JWT', 401)
        }
        const data = jwt.verify(token, String(process.env.JWT_SECRET));
        console.log((data as jwt.JwtPayload).user_id)
        return ((data as jwt.JwtPayload).user_id)
       
    }
    catch(err)
    {
        if (err instanceof HttpError)
        {
            if (err.name === 'TokenExpiredError')
                throw new HttpError('TokenExpiredError', 401)
            if (err.name === 'JsonWebTokenError')
                throw new HttpError('TokenInvalidError', 401)
            throw new HttpError(err.message, err.status_code)
        }
        console.log('unknown error')
        return (undefined)       
    }
}

export async function markAccountAsVerified(user_id: number | undefined)
{
    if (!user_id)
        throw new HttpError('failed to retrieve user_id', 500)
    const user_model = new UserModel()
    const is_account_active = await user_model.isUserVerifiedById(user_id);
    if (is_account_active)
        throw new HttpError('Account is already activated', 400)
    const was_user_activated : boolean = await user_model.activateUser(user_id);
    if (!was_user_activated)
        throw new HttpError('failed to activate User account', 500)
}