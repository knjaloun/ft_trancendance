import type{Response, Request} from 'express'

import { type RegisterDTO} from '#dtos/registerDto.js'
import {validateRequestBodyOrThrow} from '#utils/bodyValidator.js'
import {registerUser} from '#auth/services/register.service.js'

export async function registerController(req:Request, res:Response)
{
    const {email, first_name, last_name, password, phone_number} = req.body

    const data : RegisterDTO = {
        email: email,
        first_name:first_name,
        last_name: last_name,
        password: password,
        phone_number: phone_number
    }
    try
    {
        await validateRequestBodyOrThrow(data);
        await registerUser(data);
        res.status(201).send('registerd user succesfully')
    }
    catch(e)
    {
        if (e instanceof Error)
        {
             res.status(400).send(`${e.message}`)
             return;
        }
        res.status(400).send('unknow error')
    }
    
}