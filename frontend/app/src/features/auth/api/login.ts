export async function loginUser(email: string | undefined, password: string | undefined) : Promise<number>{ 
    const user_credentials: string = JSON.stringify({ email: email ?? '', password: password ?? '' }) 
    try {
        const result = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: user_credentials,
        });
       
        return (result.status)
    } catch (e) {
        console.log(e)
        return (503)
    }

}