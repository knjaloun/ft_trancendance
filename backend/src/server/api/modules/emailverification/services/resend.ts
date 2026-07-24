import { HttpError } from "#errors/HttpError.js";
import { UserModel } from "#models/UserModel.js";
import { EmailVerificationModel } from "#models/EmailVerificationModel.js";
import { type UserData } from "#auth/types/userType.js";

async function getUserIdFromDbandValidate(email: string): Promise<number | null> {
    const user_model = new UserModel();

    const user_data: UserData | null = await user_model.getUser(email);
    if (!user_data)
        throw new HttpError('EmailResendError', 401);
    if (user_data.verified)
        throw new HttpError('AccountAlreadyVerified', 403);
    return (user_data.id);

}
async function getUserTokenFromDb(user_id: number | null): Promise<string | null> {
    if (!user_id)
        return (null)
    const email_verification_model = new EmailVerificationModel();

    const token: string | null = await email_verification_model.getTokenById(user_id);
    if (!token)
        return (null);
    return (token);

}
export async function validateActivationLinkResendRequest(email: string): Promise<string> {
    try {
        const user_id: number | null = await getUserIdFromDbandValidate(email);
        const token = await getUserTokenFromDb(user_id);
        if (!token)
            throw new HttpError('EmailResendError', 400);
        return (token);
    }catch(err)
    {
        throw err;
    }
}