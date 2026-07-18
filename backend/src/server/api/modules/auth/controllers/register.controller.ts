import type{Response, Request} from 'express'
import { type RegisterDTO} from '#auth/dtos/registerDto.js'
import {validateRequestBodyOrThrow} from '#utils/bodyValidator.js'
import {registerUser} from '#auth/services/register.service.js'
import { HttpError } from '#errors/HttpError.js'
import {createEmailVerification} from '#emailVeri/services/create.js'
import { sendVerificationMail } from '#emailVeri/services/sendVerificationMail.js'

export async function registerController(req:Request, res:Response)
{
    const {email, first_name, last_name, password, phone_number, agree_to_terms} = req.body || {}

    const registration_data : RegisterDTO = {
        email: email,
        first_name:first_name,
        last_name: last_name,
        password: password,
        phone_number: phone_number,
        agree_to_terms: agree_to_terms
    }
    try
    {
        await validateRequestBodyOrThrow(registration_data);
        await registerUser(registration_data);
        const token : string = await createEmailVerification(registration_data.email);
        await sendVerificationMail(token, registration_data.email);
        res.status(201).json({message: 'ok'});
    }
    catch(err)
    {
        if (err instanceof HttpError)
        {
             res.status(err.status_code ?? 400).json({message: err.message});
             return;
        }
        res.status(400).json({message:'UnknownError'})
    }
    
}