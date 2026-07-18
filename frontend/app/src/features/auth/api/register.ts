import { type RegisterData } from "#auth/types/registerTypes.ts";
import { type ApiResponse} from "#shared/types/apiResponse.ts";

export async function registerUser(data :RegisterData, isLoading:boolean) : Promise<ApiResponse>
{
    if (isLoading)
        return({message: 'WorkInProgress', success: false})
    const register_payload = JSON.stringify(data)
    try{
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: register_payload,
        });
        const response_data = await response.json();

        return({message: response_data.message, success: response.ok})
    }catch(err)
    {
        return ({message: 'ConnectionRefusedError', success: false})
    }
}