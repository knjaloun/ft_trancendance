export class HttpError extends Error
{
    public readonly status_code : number
    constructor(message: string, status_code: number)
    {
        super(message)
        this.status_code = status_code
    }
}