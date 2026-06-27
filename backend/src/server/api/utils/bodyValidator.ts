import { type RegisterDTO, register_dto} from '#dtos/registerDto.js'
import {type loginDTO, login_dto} from '#dtos/loginDto.js'

export async function validateRequestBodyOrThrow(data: RegisterDTO | loginDTO)
{
    let auth_data;

    if (data.hasOwnProperty('first_name'))
        auth_data = register_dto.safeParse(data)
    else
        auth_data = login_dto.safeParse(data)
    if (!auth_data.success)
    {
        throw new Error(`Invalid Body`)
    }
}