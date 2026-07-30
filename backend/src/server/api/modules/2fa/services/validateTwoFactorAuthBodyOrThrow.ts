import { two_factor_auth_verify_dto, two_factor_auth_dto } from "#2fa/dtos/twofactorAuthDto.js";
import { HttpError } from "#errors/HttpError.js";

export async function validateTwoFactorAuthBodyOrThrow(email: string, type: '2faVerify' | '2faRefreshOrResend', code?: string) {
    let validation_result;
    if (type === '2faVerify')
        validation_result = two_factor_auth_verify_dto.safeParse({ email: email, code: code });
    else
        validation_result = two_factor_auth_dto.safeParse({email});
    if (!validation_result.success)
    {
        console.log(validation_result.error)
        throw new HttpError('InvalidBodyError', 400);
    }
}