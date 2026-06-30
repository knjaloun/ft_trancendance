
import {type loginDTO} from '#dtos/loginDto.js'
import {UserModel} from '#models/userModel.js'
import bcrypt from 'bcrypt'
import { InvalidCredentialsError } from '#errors/InvalidCredentialsError.js';

async function isValidCredentials(login_data:loginDTO, user_model:UserModel) : Promise<boolean>
{
    const user_credentials : loginDTO | null = await user_model.getUserCredentials(login_data.email);
    if (!user_credentials)
            return (false)
    const is_valid_credentials : boolean = await bcrypt.compare(login_data.password, user_credentials.password)
    if (!is_valid_credentials)
        return (false);
    return (true);
}   

export async function loginUser(login_data:loginDTO)
{
    const user_model = new UserModel()

    const user_exists = await user_model.userExists(login_data.email);
    if (!user_exists)
        throw new InvalidCredentialsError()
    const is_valid_credentials : boolean = await isValidCredentials(login_data, user_model)
    if (!is_valid_credentials)
        throw new InvalidCredentialsError()
}