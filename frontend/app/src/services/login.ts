export async function loginUser(email:string | undefined , password:string | undefined) 
{
    const user_credentials:string = JSON.stringify({email: email ?? '', password: password ?? ''})
    const result = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers : {
                'Content-type' : 'application/json'
        },
        body : user_credentials,
    })
    const data = await result.json();
    let isError: boolean = false;
    if (!result.ok)
        isError = true;
    return ({isError: isError, message: data.message})
}