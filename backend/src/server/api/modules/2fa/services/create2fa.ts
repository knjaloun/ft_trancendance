import jwt from 'jsonwebtoken';
import { UserModel } from '#models/UserModel.js';
export async function generate2FactorAuthJWT(user_id: number, two_fa_code: number)
{
    const token : string = jwt.sign(
            {
                user_id: user_id,
                jti : crypto.randomUUID(),
                code: two_fa_code
            }
            , String(process.env.JWT_SECRET), {expiresIn : '15m'});
        return (token ?? undefined)
}


export async function createtwoFactorAuth(email : string)
{
    const user_model = new UserModel();

    const user_id = await user_model.getId(email);
}