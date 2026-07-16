import { type RegisterData } from "#auth/types/registerTypes.ts";

export async function registerUser(data :RegisterData, isLoading:boolean) : Promise<number>
{
    if (isLoading)
        return(400)
    const register_payload = JSON.stringify(data)
    try{
        const result = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: register_payload,
        });
        return(result.status)
    }catch(err)
    {
        return (503)
    }
}