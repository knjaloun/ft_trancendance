
/*
export async function verifyEmail(token: string | null) : Promise<string>
{
    if (!token)
        return('TokenInvalidError')
    const email_verification_payload = JSON.stringify({token: token})
    try
    {
        const response = await fetch(`http://localhost:3000/api/verify`, {
            method: 'POST',
             headers: {
                'Content-type': 'application/json'
            },
            body : email_verification_payload
        }) 
    }catch(err)
    {
        return ()
    }
}
*/