import { two_factor_auth_dto } from "#2fa/dtos/twofactorAuthDto.js";
import { HttpError } from "#errors/HttpError.js";

export async function validateTwoFactorAuthBodyOrThrow(email: string)
{
    const validation_result = two_factor_auth_dto.safeParse({email: email});
    if (!validation_result.success)
        throw new HttpError('InvalidBodyError', 400);
}