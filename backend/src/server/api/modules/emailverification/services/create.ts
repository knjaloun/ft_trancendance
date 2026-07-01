
import jwt from 'jsonwebtoken'
import {UserModel} from '#models/UserModel.js'
import { email_verification_dto, type emailVerificationDTO} from '#dtos/emailVerificationDto.js';
import { EmailVerificationModel } from '#models/EmailVerificationModel.js';
import { HttpError } from '#errors/HttpError.js';

export async function generateNewJwt(user_id: number): Promise<string | undefined>
{
    const token : string = jwt.sign(
        {
            user_id: user_id,
            jti : crypto.randomUUID()
        }
        , String(process.env.JWT_SECRET), {expiresIn : '24h'});
    return (token ?? undefined)
}

async function CreateEmailVerificationData(email: string) : Promise<emailVerificationDTO | undefined>
{
    const user_model = new UserModel()
    const user_id : number = await user_model.getId(email)

    const jwt_token : string | undefined = await generateNewJwt(user_id)
    const email_verification_data = email_verification_dto.safeParse({user_id: user_id, token: jwt_token})
    if (!email_verification_data.success)
        return (undefined)
    return (email_verification_data.data)
}

export async function CreateEmailVerification(email:string)
{
    const email_verification_data : emailVerificationDTO | undefined =   await CreateEmailVerificationData(email);
    if (!email_verification_data)
        throw new HttpError('generating email activation data failed', 500);
    const email_verification_model = new EmailVerificationModel();
    const email_verification_success = await email_verification_model.openNewVerification(email_verification_data);
    if (!email_verification_success)
         throw new HttpError('generating email activation token failed', 500);
}
