
import { useState } from 'react';
import { type ChangeEvent } from "react";
import { loginUser } from '../api/login'
import { loginNotification } from '#notifications/login_toast.ts'
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';


export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        const result = await loginUser(email, password);
        loginNotification(result.isError, result.message)
    }
    return (

        <form className="w-full h-full ">
            <div className="w-full h-1/2 sm:h-6/10 ">
                <div className="w-full h-1/2 flex justify-center mt-10">
                    <input type="email" placeholder="John@example.com" value={email} onChange={handleEmailChange} className="bg-gray-700 
                         w-7/10 h-7/10 sm:h-9/10 sm:w-7/10 rounded-3xl text-white focus:outline-none pl-5"/>
                </div>
                <div className="w-full h-1/2  flex justify-center">
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="bg-gray-700 pl-5 w-7/10 h-7/10 sm:w-7/10 
                        sm:h-9/10 rounded-3xl text-white focus:outline-none sm:mt-2"/>
                </div>
            </div>
            <div className="w-full h-1/2 sm:h-6/10 flex flex-col sm:mt-5">
                <div className="w-full h-1/2  flex justify-center ">
                    <button type="button" onClick={handleLogin} className="border w-7/10 h-6/10 rounded-2xl sm:w-7/10 sm:h-8/10 text-purple-300 hover:shadow-purple-200 hover:shadow-md cursor-pointer">Login</button>
                    <ToastContainer />
                </div>
                <div className="w-full h-1/2  flex justify-center">
                    <Link to="/register" className="border w-7/10 sm:mt-2 h-6/10 sm:w-7/10 sm:h-8/10 rounded-2xl text-red-500 hover:shadow-red-300 hover:shadow-md flex justify-center items-center ">Signup</Link>
                </div>
            </div>
        </form>
    )
}