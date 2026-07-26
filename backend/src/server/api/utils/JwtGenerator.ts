
import jwt from 'jsonwebtoken'
import type { JwtData } from '#types/jwtData.js';
import ms from 'ms'

export async function generateNewJwt(data:JwtData, expiresIn:ms.StringValue): Promise<string | undefined>
{
    const token : string = jwt.sign(data

        , String(process.env.JWT_SECRET), {expiresIn : expiresIn});
    return (token ?? undefined)
}