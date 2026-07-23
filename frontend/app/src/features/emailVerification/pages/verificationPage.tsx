
import { ToastContainer } from "react-toastify";
import { useEmailVerification } from "#emailVeri/hooks/useEmailVerification.ts";
import { EmailVerificationBody } from "#emailVeri/components/EmailVerificationBody.tsx";
import { Link } from "react-router-dom";

export function EmailVerificationPage() {
    const { handleVerifyEmail, handleSendNewActivationLink, isLoading } = useEmailVerification();
    return (
        <EmailVerificationBody>
            <div className="w-full h-2/10 font-serif  flex justify-center items-center">
                <h1 className="text-2xl">Please verify your Email</h1>
            </div>
            <div className="w-full h-2/10 min-h-30">
                <div className="w-full h-1/2 flex justify-center items-center">
                    <button type="button" onClick={handleVerifyEmail} disabled={isLoading} className={`bg-red-400 w-7/10 h-6/10 rounded-xl text-white ${!isLoading ? 'hover:bg-red-300' : ''} cursor-pointer  text-sm sm:text-xl`}>{isLoading ? 'Loading...' : 'Verify Email'}</button>
                </div>
                <div className="w-full h-1/2 flex justify-center items-center">
                    <button type="button" onClick={handleSendNewActivationLink} disabled={isLoading} className={`bg-green-400 w-7/10 h-6/10 rounded-xl text-black ${!isLoading ? 'hover:bg-green-300' : ''} cursor-pointer text-sm sm:text-xl`}>{isLoading ? 'Loading...' : 'Request new Link'}</button>
                </div>
            </div>
            <div className="w-full h-1/10 flex justify-center items-center">
                <p>back to <Link to="/login" className="text-red-400 cursor-pointer">Login</Link></p>
            </div>

            <ToastContainer />
        </EmailVerificationBody>
    )
}