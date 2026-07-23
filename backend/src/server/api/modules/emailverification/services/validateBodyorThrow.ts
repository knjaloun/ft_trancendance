
import { resend_email_verification_dto } from "#emailVeri/dtos/emailVerificationDto.js";
import { HttpError } from "#errors/HttpError.js";
export async function validateBodyorThrow(email: string) {
    let email_verification_data;;

    email_verification_data = resend_email_verification_dto.safeParse({ email });
    if (!email_verification_data.success) {
        throw new HttpError('InvalidBodyError', 400)
    }
}