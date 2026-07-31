
import {UserModel} from '#models/UserModel.js'
import { email_verification_dto, type emailVerificationDTO} from '#emailVeri/dtos/emailVerificationDto.js';
import { EmailVerificationModel } from '#models/EmailVerificationModel.js';
import { HttpError } from '#errors/HttpError.js';
import { generateNewJwt } from '#utils/JwtGenerator.js';


async function getEmailVerificationData(email: string) : Promise<emailVerificationDTO | undefined>
{
    const user_model = new UserModel()
    const user_id : number | undefined = await user_model.getId(email)
    if (!user_id)
        return (undefined)
    const jwt_token : string | undefined = await generateNewJwt({user_id: user_id}, '24h')
    const email_verification_data = email_verification_dto.safeParse({user_id: user_id, token: jwt_token})
    if (!email_verification_data.success)
        return (undefined)
    return (email_verification_data.data)
}

/**
 * create a new Email verification Process , when an error accurs it throws an Error
 * @param email 
 * @returns the generated Jwt Token
 */
export async function createEmailVerification(email:string) : Promise<string>
{
    const email_verification_data : emailVerificationDTO | undefined =   await getEmailVerificationData(email);
    if (!email_verification_data)
        throw new HttpError('generating email activation data failed', 500);
    const email_verification_model = new EmailVerificationModel();
    const email_verification_success = await email_verification_model.openNewVerification(email_verification_data);
    if (!email_verification_success)
         throw new HttpError('generating email activation token failed', 500);  
    return (email_verification_data.token) 
}
