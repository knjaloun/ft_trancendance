import { HttpError } from "#errors/HttpError.js";

export class InvalidBodyError extends HttpError
{
    constructor()
    {
        super('Invalid Body', 400)
    }
}