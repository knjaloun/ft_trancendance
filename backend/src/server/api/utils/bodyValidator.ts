import { type RegisterDTO, registerDTO} from '#dtos/registerDto.js'

export async function validateRequestBodyOrThrow(data: RegisterDTO)
{
    const register_data = registerDTO.safeParse(data);
    if (!register_data.success)
    {
        throw new Error(`Invalid Body`)
    }

}