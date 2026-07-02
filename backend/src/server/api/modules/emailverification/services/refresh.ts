import {HttpError} from '#errors/HttpError.js'
import { EmailVerificationModel } from '#models/EmailVerificationModel.js'
import { UserModel } from '#models/UserModel.js'
import { generateNewJwt } from './create.js'
export async function refreshJwtT(old_token: string | undefined)
{
    if (!old_token)
        throw new HttpError('old jwt token missing', 401)
    const email_verification_model = new EmailVerificationModel()
    const user_model = new UserModel()

    const user_id : number | undefined = await email_verification_model.getUserIdByToken(old_token);
    if (!user_id)
        throw new HttpError('invalid Jwt Token', 401);

     const is_user_verified = await user_model.isUserVerifiedById(user_id);
     if (is_user_verified)
        throw new HttpError('user is already Verified', 401);

    const new_token : string | undefined = await generateNewJwt(user_id);
    if (!new_token)
        throw new HttpError('failed to generate new JWT', 500)

    const update_token_success : boolean = await email_verification_model.updateToken({token : new_token, user_id: user_id})
    if (!update_token_success)
        throw new HttpError('failed to refresh JWT', 500)

}