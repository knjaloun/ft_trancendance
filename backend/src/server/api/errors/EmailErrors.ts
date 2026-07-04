import {HttpError} from '#errors/HttpError.js'

export class ConnectionFailedError extends HttpError
{
    constructor(message: string)
    {
        super(message, 500)
        this.name = "ConnectionFailedError"
    }
}

export class EmailDeleveringError extends HttpError
{
    constructor(message: string)
    {
        super(message, 500)
        this.name = "EmailDeleveringError"
    }
}