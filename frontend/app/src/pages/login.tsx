export function LoginPage()
{
    return (
       <div className="w-full h-full bg-gray-950 flex justify-center items-center">
            <div className="bg-gray-900 w-1/3 h-175 rounded-[15%] border border-purple-400 shadow-[0_30px_100px_rgba(0,0,0,0.6)] shadow-purple-950">
                <div className="h-1/5 w-full flex justify-center items-center text-white text-6xl">
                    <h1>Login</h1>
                </div>
                <form className="h-1/3 w-full">
                    <div className=" h-1/2 w-full flex justify-center items-center">
                        <input placeholder="Joe@example.com" type="email" className="w-8/10 p-3 rounded-3xl bg-gray-800 text-white border border-white focus:outline-none"/>
                    </div>
                      <div className=" h-1/2 w-full flex justify-center items-center">
                        <input placeholder="Password" type="password" className="w-8/10 p-3 rounded-3xl bg-gray-800 text-white border border-white focus:outline-none"/>
                      </div>
                     
                </form>
            </div>
       </div>
    )
}