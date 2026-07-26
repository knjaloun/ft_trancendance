
import { UserModel } from '#models/UserModel.js';
import { generateNewJwt } from '#utils/JwtGenerator.js';
import { HttpError } from '#errors/HttpError.js';
import { TwoFactorAuthModel } from '#models/TwoFactorAuthModel.js';

/**
 * generates a new 2FA code, when code_length paramenter is less or equal
 * to 0 it default to 9
 * @param code_length the length of the generated code
 * @returns the 2fa code 
 */
export async function generateNew2FaCode(code_length: number) : Promise<string>
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


async function openNewTwoFactorAuth(user_id:number, token:string) : Promise<boolean>
{
    const two_factor_auth_model = new TwoFactorAuthModel();
    const res = await two_factor_auth_model.openNew2Fa(token, user_id);
    
    return (res);
}
/**
 * open a new two factor verification process.
 * if the users email is not registered or the account
 * email is not verified an exception will be thrown
 * @param email the users Email 
 */
export async function createTwoFactorAuthAndValidate(email : string) 
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
    const open_2fa_success : boolean = await openNewTwoFactorAuth(user.id, token);
    if (!open_2fa_success) 
        throw new HttpError('ServerError', 500);
}