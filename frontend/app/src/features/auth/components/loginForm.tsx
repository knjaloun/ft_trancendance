
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useAuth } from '#auth/hooks/useAuth.ts';



export function LoginForm() {
    
    const {email, password, handleEmailChange,handlePasswordChange,handleLogin} = useAuth()   
    return (

        <form className="w-8/10 h-8/10  max-w-120">
            <div className="w-full h-1/10  font-sans font-bold text-3xl flex justify-center items-center">WELCOME BACK</div>
            <div className="w-full h-2/10 mt-5 flex flex-col">
                <div className="w-full h-1/2 ">
                    <div className="w-full h-3/10">
                        <label>Email</label>
                    </div>
                    <div className="w-full h-7/10 mt-2">
                        <input type="email" placeholder="John@example.com" onChange={handleEmailChange} value={email} className="bg-white w-8/10 h-7/10 focus:outline-none rounded-xl pl-5" />
                    </div>
                </div>

                <div className="w-full h-1/2 ">
                    <div className="w-full h-3/10">
                        <label>Password</label>
                    </div>
                    <div className="w-full h-7/10 mt-2">
                        <input type="password" placeholder="Password" onChange={handlePasswordChange} value={password} className="bg-white w-8/10 h-7/10 focus:outline-none rounded-xl pl-5" />
                    </div>

                </div>

            </div>
            <div className="w-full h-1/10 mt-6">
                <div className="w-full h-1/2 ">
                    <button type="button" onClick={handleLogin} className="w-8/10 h-full bg-red-400 hover:bg-red-300 text-white rounded-xl flex justify-center items-center cursor-pointer">Sign in</button>
                </div>
                <div className="w-full h-1/2  mt-3">
                    <button type="button" className="w-8/10 h-full  hover:bg-gray-100 bg-white rounded-xl flex justify-center items-center cursor-pointer">

                        <img src="/icons/google.png" className="h-7/10 w-1/10 ml-10"></img><span className="w-9/10 h-full flex justify-start items-center ml-5">Sign in with Google</span></button>
                </div>

            </div>

            <div className="w-full h-1/16 mt-10 text-sm "> <p>you dont have an Account?<Link to="/register" className="text-red-600 ml-2">Sign up for free!</Link></p></div>
            <ToastContainer/>
        </form>
    )
}