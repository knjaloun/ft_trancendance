import { type ApiResponse } from "#shared/types/apiResponse.ts";

export async function verifyEmail(token: string | null) : Promise<ApiResponse>
{
    if (!token)
        return({message : 'TokenInvalidError', success: false})
    const payload = JSON.stringify({token: token})
    try
    {
        const response = await fetch(`http://localhost:3000/api/verify`, {
            method: 'POST',
             headers: {
                'Content-type': 'application/json'
            },
            body : payload
        });
        const response_data = await response.json()
        return({message : response_data.message, success: response.ok})
    }catch(err)
    {
        return ({message : 'ConnectionRefusedError', success:false})
    }
}
