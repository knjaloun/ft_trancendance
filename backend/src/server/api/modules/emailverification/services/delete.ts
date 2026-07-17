import { EmailVerificationModel } from "#models/EmailVerificationModel.js";
import {HttpError} from '#errors/HttpError.js'

export async function deleteVerification(user_id: number)
{
    const email_veriication_model = new EmailVerificationModel();
    const delete_success : boolean = await email_veriication_model.deleteVerification(user_id);
    if (!delete_success)
        throw new HttpError('ServerError', 500);
}