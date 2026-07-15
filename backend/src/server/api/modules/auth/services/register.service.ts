
import { type RegisterDTO } from "#auth/dtos/registerDto.js";
import bcrypt from 'bcrypt'
import {UserModel} from '#models/UserModel.js'
import {HttpError} from '#errors/HttpError.js'
/**
 * hashes the user password and register teh user in the database. if saving the user in the database fails it throws an error
 * @param data an object that holds data for registration
 * 
 */
export async function registerUser(data:RegisterDTO)
{
    if(!data.agreed_terms)
        throw new HttpError('Term_Not-Accepted', 403)
    const salt_round = 10
    const salt = await bcrypt.genSalt(salt_round)
    const hashed_password = await bcrypt.hash(data.password, salt)
    data.password = hashed_password

    const user_model = new UserModel()
    const user_exists:boolean = await user_model.userExists(data.email)
    if (user_exists)
        throw new HttpError('email already in use', 400);

    const user_creation_success: boolean = await user_model.createNewUser(data)
    if (!user_creation_success)
        throw new HttpError('Failed to register User', 400)
}