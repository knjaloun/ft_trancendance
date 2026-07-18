import {HttpError} from '#errors/HttpError.js'
import { EmailVerificationModel } from '#models/EmailVerificationModel.js'
import { UserModel } from '#models/UserModel.js'
import { generateNewJwt } from './create.js'
export async function refreshJwtT(old_token: string | undefined) : Promise<any>
{
    if (!old_token)
        throw new HttpError('UnknownTokenError', 401)
    const email_verification_model = new EmailVerificationModel()
    const user_model = new UserModel()

    const user_id : number | undefined = await email_verification_model.getUserIdByToken(old_token);
    if (!user_id)
        throw new HttpError('InvalidJWTError', 401);

     const data = await user_model.getverificationStatusAndEmail(user_id);
     if (data.verified)
        throw new HttpError('AccountAlreadyVerified', 401);

    const new_token : string | undefined = await generateNewJwt(user_id);
    if (!new_token)
        throw new HttpError('ServerError', 500)

    const update_token_success : boolean = await email_verification_model.updateToken({token : new_token, user_id: user_id})
    if (!update_token_success)
        throw new HttpError('ServerError', 500)

    return ({email: data.email, token: new_token})
}