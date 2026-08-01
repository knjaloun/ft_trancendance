import { Link } from "react-router-dom"

export function TwoFaVerifyPage() {
    return (

        <div className="w-full h-full bg-white-100 flex justify-center items-center">
            <div className="h-8/10 w-8/10 bg-gray-100 max-w-150 max-h-200">
                <div className="w-full h-1/10 bg-red-200 flex items-center justify-center">
                <h1 className="text-2xl ">Resend Activation Link</h1>
            </div>
            <div className="w-full h-1/10 mt-10">
                <div className="w-full h-3/10">
                    <label className="ml-3">email</label>
                </div>
                 <div className="w-full h-7/10 flex items-center">
                    <input type="email" placeholder="Joe@example.com"  className="bg-white w-8/10 h-7/10 md:h-8/10 rounded-xl pl-5 focus:outline-none ml-3"/>
                 </div>
            </div>
            <div className="w-full h-1/10  flex justify-center items-center">
                <button type="button" className={`w-6/10 h-6/10 bg-green-400 rounded-xl cursor-pointer 'hover:bg-green-300' : ''}`}>Verify</button>
            </div>
            <div className="w-full h-1/10 flex justify-center items-center">
                <p>back to <Link to="/login" className="text-red-400 cursor-pointer">Login</Link></p>
            </div>
            </div>
        </div>
    )
}