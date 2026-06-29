import {HttpError} from '#errors/HttpError.js'

export class InvalidCredentialsError extends HttpError
{
    constructor()
    {
        super('Invalid email or password',401)
    }
}