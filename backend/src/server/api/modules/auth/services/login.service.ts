
import {type loginDTO} from '#dtos/loginDto.js'
import {UserModel} from '#models/UserModel.js'
import bcrypt from 'bcrypt'
import { HttpError } from '#errors/HttpError.js'
import {type userDTO} from '#dtos/userDto.js'

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
        throw new HttpError('Invalid email or password!!', 401)
    const is_valid_credentials : boolean = await isValidCredentials(login_data, user)
    if (!is_valid_credentials)
           throw new HttpError('Invalid email or password!!', 401)
    if (!user.verified)
        throw new HttpError('user is not verified', 403)
}