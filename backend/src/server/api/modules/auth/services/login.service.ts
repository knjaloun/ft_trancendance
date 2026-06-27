
import {type loginDTO} from '#dtos/loginDto.js'
import {UserModel} from '#models/userModel.js'

async function isValidCredentials(login_data:loginDTO, user_model:UserModel)
{
    await user_model.getUser();
    login_data.email;
}   

export async function loginUser(login_data:loginDTO)
{
    const user_model = new UserModel(login_data)

    const user_exists = await user_model.userExists();
    if (!user_exists)
         throw new Error('invalid email or password!!')
    await isValidCredentials(login_data, user_model)
}