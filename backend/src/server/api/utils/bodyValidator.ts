import { type RegisterDTO, register_dto} from '#auth/dtos/registerDto.js'
import {type loginDTO, login_dto} from '#auth/dtos/loginDto.js'
import { HttpError } from '#errors/HttpError.js';

export async function validateRequestBodyOrThrow(data: RegisterDTO | loginDTO)
{
    let auth_data;
    let is_login : boolean = false;

    if (data.hasOwnProperty('first_name'))
        auth_data = register_dto.safeParse(data)
    else
    {
        auth_data = login_dto.safeParse(data)
        is_login = true;
    }
    if (!auth_data.success)
    {
        if (is_login)
            throw new HttpError('InvalidCredentialsError', 401)
        throw new HttpError('RegisterError', 400)
    }
}