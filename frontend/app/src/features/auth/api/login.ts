import type {ApiResponse} from '#shared/types/apiResponse.ts'

export async function loginUser(email: string | undefined, password: string | undefined) : Promise<ApiResponse>{ 
    const user_credentials: string = JSON.stringify({ email: email ?? '', password: password ?? '' }) 
    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: user_credentials,
        });
       
        const response_data = await response.json()
        return ({message: response_data.message, sucess: response.ok})
    } catch (e) {
        console.log(e)
        return ({message: 'ConnectionRefusedError', sucess: false})
    }

}