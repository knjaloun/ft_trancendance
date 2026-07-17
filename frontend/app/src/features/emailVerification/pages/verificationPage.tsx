




function handleVerifyEmail()
{
    const activation_token:string = new URLSearchParams(window.location.search).get('token');
    console.log(activation_token)
}

export function EmailVerificationPage() {
    return (

        <div className="w-full h-full bg-white-100 flex justify-center items-center">
            <div className="h-8/10 w-8/10 bg-gray-100 max-w-150">
                <div className="w-full h-2/10 font-serif  flex justify-center items-center">
                    <h1 className="text-2xl">Please verify your Email</h1>
                </div>
                <div className="w-full h-2/10 min-h-30">
                    <div className="w-full h-1/2 flex justify-center items-center">
                        <button type="button" onClick={handleVerifyEmail} className="bg-red-400 w-7/10 h-6/10 rounded-xl text-white hover:bg-red-300 cursor-pointer  text-sm sm:text-xl">Verify Email</button>
                    </div>
                     <div className="w-full h-1/2 flex justify-center items-center">
                        <button type="button" className="bg-green-400 w-7/10 h-6/10 rounded-xl text-black hover:bg-green-300 cursor-pointer text-sm sm:text-xl">Request new Activation link</button>
                    </div>
                </div>
               
            </div>
        </div>
    )
}