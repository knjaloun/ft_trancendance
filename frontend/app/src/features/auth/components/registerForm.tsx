

export function RegisterForm() {
    return (
        <form className="w-full h-full ">
            <div className="w-full h-3/10  flex flex-col sm:h-2/10 sm:flex-row sm:mt-4">
                <div className="w-full h-full flex items-center justify-center">
                    <input type="text" placeholder="firstname" className="bg-gray-700 pl-5 w-7/10 h-7/10
                         rounded-3xl text-white focus:outline-none "/>
                </div>

                <div className="w-full h-full  flex items-center justify-center">
                    <input type="text" placeholder="lastname" className="bg-gray-700 pl-5 w-7/10 h-7/10
                         rounded-3xl text-white focus:outline-none sm:mr-20"/>
                </div>

            </div>

            <div className="w-full h-2/10 flex  items-center justify-center mt-5 sm:justify-start sm:ml-10 sm:h-2/12">
                <input placeholder="Phone Number" type="text" className="bg-gray-700 pl-5 w-7/10 h-5/10 sm:h-8/10
                         rounded-4xl text-white focus:outline-none "/>
            </div>
            <div className="w-full h-2/10 flex justify-center mt-5 sm:justify-start sm:ml-10 sm:h-2/12">
                <input placeholder="John@example.com" type="email" className="bg-gray-700 pl-5 w-7/10 h-5/10 sm:h-8/10
                         rounded-4xl text-white focus:outline-none"/>

            </div>
            <div className="w-full h-3/10 sm:mt-4 sm:h-3/10">
                <div className="w-full h-1/2  flex justify-center sm:justify-start sm:ml-10">
                     <input placeholder="password" type="password" className="bg-gray-700 pl-5 w-7/10 h-6/10 sm:h-9/10
                         rounded-4xl text-white focus:outline-none"/>
                </div>
                <div className="w-full h-1/2 flex justify-center sm:mt-2 sm:justify-start sm:ml-10">
                 <input placeholder="Repeat password" type="password" className="bg-gray-700 pl-5 w-7/10 h-6/10 sm:h-9/10
                         rounded-4xl text-white focus:outline-none"/>
                </div>
            </div>

            <div className="w-full h-1/10 sm:mt-5">
            <input type="checkbox" className="mr-2 ml-20"/>
            <label className="text-white">I accept the <a href="" className="text-purple-600 underline">Term and Conditions </a></label>
            </div>
        </form>
    )
}