import type{Response, Request} from 'express'
import {type loginDTO} from '#dtos/loginDto.js'
import {validateRequestBodyOrThrow} from '#utils/bodyValidator.js'
import {loginUser} from '#auth/services/login.service.js'
import { HttpError } from '#errors/HttpError.js';

export async function loginController(req:Request, res:Response)
{
    const {email, password} = req.body || {};

    const login_data: loginDTO = {
        email: email,
        password: password
    }
    try
    {
        await validateRequestBodyOrThrow(login_data)
        await loginUser(login_data);
        res.send('user can enter')
    }catch(err)
    {
        if (err instanceof HttpError)
        {
            res.status(err.status_code ?? 400).send(`${err.name}`)
            return;
        }
        res.status(400).send(`unknown error`)

    }
}