import { type ApiResponse } from "#shared/types/apiResponse.ts";

export async function resendActivationLink(email: string): Promise<ApiResponse> {
    const payload = JSON.stringify({ email: email });

    try {
        const response = await fetch('http://localhost:3000/api/verify/resend', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: payload
        });
        const response_data = await response.json()
        return({message : response_data.message, success: response.ok})
    } catch (err) {
         return ({message : 'ConnectionRefusedError', success:false})
    }
}