export function LoginPage()
{
    return (
       <div className="w-full h-full bg-gray-950 flex justify-center items-center border ">
            <div className="bg-gray-900 w-full sm:w-sm h-full sm:rounded-[15%] shadow-lg sm:shadow-purple-200 sm:border
             sm:border-purple-400  sm:h-6/10 md:w-7/10 md:h-7/10 lg:w-lg xl:w-xl">

            <div className="w-full h-2/10 flex justify-center items-center text-white text-5xl">
                <h1>Login</h1>
            </div>
            <div className="w-full h-1/4">
                <form className="w-full h-full">
                    <div className="w-full h-1/2 flex justify-center mt-10">
                        <input type="email" placeholder="John@example.com" className="bg-gray-700 
                         w-7/10 h-5/10 sm:h-7/10 sm:w-7/10 rounded-3xl text-white focus:outline-none pl-5"/>
                    </div>
                     <div className="w-full h-1/2  flex justify-center">
                        <input type="email" placeholder="Password" className="bg-gray-700 pl-5 w-7/10 h-5/10 sm:w-7/10 
                        sm:h-7/10 rounded-3xl text-white focus:outline-none"/>
                     </div>
                </form>
            </div>
            <div className="w-full h-2/10  flex flex-col">
                <div className="w-full h-1/2  flex justify-center">
                    <button className="border w-6/10 h-1/2 rounded-2xl sm:w-7/10 sm:h-7/10 text-purple-300 hover:shadow-purple-200 hover:shadow-md">Login</button>
                </div>
                <div className="w-full h-1/2  flex justify-center">
                    <button className="border w-6/10 h-1/2 sm:w-7/10 sm:h-7/10 rounded-2xl text-red-500 hover:shadow-red-300 hover:shadow-md">Signup</button>
                </div>
            </div>           
            </div>
       </div>
    )
}