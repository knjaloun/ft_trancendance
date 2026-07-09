
import {type loginDTO} from '#dtos/loginDto.js'
import {UserModel} from '#models/UserModel.js'
import bcrypt from 'bcrypt'
import {type userDTO} from '#dtos/userDto.js'
import { NotVerifiedError,  InvalidCredetialsError} from '#errors/loginErrors.js'

async function isValidCredentials(login_data:loginDTO, user_data : userDTO) : Promise<boolean>
{
    const is_valid_credentials : boolean = await bcrypt.compare(login_data.password, user_data.password)
    if (!is_valid_credentials)
        return (false);
    return (true);
}   

export async function loginUser(login_data:loginDTO)
{
    const user_model = new UserModel()

    const user : userDTO | null = await user_model.getUser(login_data.email)
    if (!user)
        throw new InvalidCredetialsError('InvalidCredentialsError')
    const is_valid_credentials : boolean = await isValidCredentials(login_data, user)
    if (!is_valid_credentials)
           throw new InvalidCredetialsError('InvalidCredentialsError')
    if (!user.verified)
        throw new NotVerifiedError('NotVerifiedError')
}