
import { UserModel } from '#models/UserModel.js';
import { generateNewJwt } from '#utils/JwtGenerator.js';
import { HttpError } from '#errors/HttpError.js';

/**
 * generates a new 2FA code, when code_length paramenter is less or equal
 * to 0 it default to 9
 * @param code_length the length of the generated code
 * @returns the 2fa code 
 */
async function generateNew2FaCode(code_length: number) : Promise<string>
{
    if (code_length <= 0)
       code_length = 9
    const array = new Uint32Array(1);

    crypto.getRandomValues(array)
    let two_fa_code = String(array[0])

    const length_difference = two_fa_code.length - code_length;
    if (length_difference > 0)
        two_fa_code = two_fa_code.substring(0, code_length - 1);
    if (length_difference < 0)
        two_fa_code = two_fa_code.padStart(code_length - two_fa_code.length, '0');
    return (two_fa_code);
}


export async function createTwoFactorAuthAndValidate(email : string) : Promise<string>
{
    const user_model = new UserModel();

     const user = await user_model.getUser(email);
     if (!user || !user.verified)
        throw new HttpError('InvalidUserError', 401);
    const two_fa_code : string  = await generateNew2FaCode(9);
    console.log(`generated code : ${two_fa_code}`);

    const token = await generateNewJwt({user_id: user.id, code: two_fa_code}, '15min');
    if (!token)
        throw new HttpError('ServerError', 500);
    return (token)

}