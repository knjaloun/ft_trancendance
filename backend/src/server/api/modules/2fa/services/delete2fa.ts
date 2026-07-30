import { TwoFactorAuthModel } from "#models/TwoFactorAuthModel.js";

export async function invalidate2FaCode(user_id: number)
{
    const two_factor_auth_model = new TwoFactorAuthModel();
    await two_factor_auth_model.delete2FaCodeById(user_id);

}