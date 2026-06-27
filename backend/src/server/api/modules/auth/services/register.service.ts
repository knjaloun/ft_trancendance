
import { type RegisterDTO } from "#dtos/registerDto.js";
import bcrypt from 'bcrypt'
import {UserModel} from '#models/userModel.js'
/**
 * hashes the user password and register teh user in the database. if saving the user in the database fails it throws an error
 * @param data an object that holds data for registration
 * 
 */
export async function registerUser(data:RegisterDTO)
{
    const salt_round = 10
    const salt = await bcrypt.genSalt(salt_round)
    const hashed_password = await bcrypt.hash(data.password, salt)
    data.password = hashed_password

    const user_model = new UserModel(data)
    const user_exists:boolean = await user_model.userExists()
    if (user_exists)
        throw new Error('user already exists');

    const user_creation_success: boolean = await user_model.createNewUser()
    if (!user_creation_success)
        throw new Error('Failed to register User')
}