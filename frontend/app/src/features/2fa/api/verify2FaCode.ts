import { type ApiResponse } from "#shared/types/apiResponse.ts";

export async function verify2faCode(code:string, email:string): Promise<ApiResponse>
{
    const payload = JSON.stringify({code:code, email: email});
    try{
        const response = await fetch('http://localhost:3000/api/2fa/verify', {
            method: 'POST',
            credentials: 'include',
            headers : {
                   'Content-type': 'application/json'
            },
            body: payload
            
        })
        const response_data = await response.json()
        return({message : response_data.message, success: response.ok})
       

    }catch (err)
    {
         return ({message : 'ConnectionRefusedError', success:false})
    }
}