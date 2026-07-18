import { type ApiResponse } from "#shared/types/apiResponse.ts";

export async function refreshActivationLink(token : string | null) : Promise<ApiResponse>
{
    if (!token)
        return({message : 'UnknownTokenError', success: false})
     const activation_link_refresh_playload= JSON.stringify({token: token})
    try{
        const response  = await fetch('http://localhost:3000/api/verify/refresh', {
             method: 'PATCH',
             headers: {
                'Content-type': 'application/json'
            },
            body : activation_link_refresh_playload
        })
         const response_data = await response.json()
        return({message : response_data.message, success: response.ok})
    }catch(err)
    {
        return ({message : 'ConnectionRefusedError', success:false})
    }
}