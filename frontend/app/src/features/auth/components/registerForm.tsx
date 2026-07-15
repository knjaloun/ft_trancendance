import { Link } from "react-router-dom"

export function RegisterForm() {
    return (
        <form className="w-8/10 h-full  max-w-120">
            <div className="w-full h-1/10  font-sans font-bold text-xl sm:text-2xl flex justify-center items-center">CREATE ACCOUNT</div>
            <div className="w-full h-7/10 min-h-130">
                <div className="w-full h-1/7 max-h-30">
                    <div className="w-full h-3/10">
                        <label>first name</label>
                    </div>

                    <div className="w-full h-7/10 ">
                        <input type="text" placeholder="Joe" className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div>
                </div>
                <div className="w-full h-1/7 max-h-30">
                    <div className="w-full h-3/10 ">
                        <label>last name</label>
                    </div>

                    <div className="w-full h-7/10 ">
                        <input type="text" placeholder="Doe" className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div>
                </div>
                <div className="w-full h-1/7 max-h-30">
                    <div className="w-full h-3/10 ">
                        <label>phone number</label>
                    </div>

                    <div className="w-full h-7/10 ">
                        <input type="text" placeholder="+14155552671" className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div>
                </div>
                <div className="w-full h-1/7 max-h-30">
                    <div className="w-full h-3/10 ">
                        <label>Email</label>
                    </div>

                    <div className="w-full h-7/10 ">
                        <input type="email" placeholder="Joe@example.com" className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div></div>
                <div className="w-full h-1/7 max-h-30">

                    <div className="w-full h-3/10 ">
                        <label>Password</label>
                    </div>

                    <div className="w-full h-7/10 ">
                        <input type="password" placeholder="Password" className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div>

                </div>

                <div className="w-full h-1/18">
                    <input type="checkbox" />
                    <label className="ml-3 text-xs xl:text-xl">I agree to the <a href="" className="text-blue-500 underline">Term</a> of service and <a href="" className="text-blue-500 underline">Private</a> Policy</label>

                </div>
                <div className="w-full h-1/7 mt-7 sm:mt-3 min-h-18 max-h-40">
                    <div className="w-full h-1/2">
                        <button type="button" className="w-8/10 h-8/10 bg-red-400 rounded-xl hover:bg-red-300 cursor-pointer text-white">Register</button>

                    </div>
                    <div className="w-full h-1/2">
                        <p className="text-sm xl:text-xl">Already Registered? <Link to="/login" className="text-red-600 ml-2">Login</Link></p>
                    </div>

                </div>


            </div>

        </form>
    )
}