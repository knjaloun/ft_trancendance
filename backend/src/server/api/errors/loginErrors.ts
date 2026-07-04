
import { HttpError } from "./HttpError.js";


export class InvalidCredetialsError extends HttpError{
    constructor(message:string)
    {
        super(message, 401)
        this.name = 'InvalidCredetialsError'
    }
}

export class NotVerifiedError extends HttpError{
    constructor(message: string)
    {
        super(message, 401 )
        this.name = 'NotVerifiedError'
    }
}