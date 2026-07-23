import { EmailVerificationBody } from "#emailVeri/components/EmailVerificationBody.tsx";
import { Link } from "react-router-dom";
import { useResendEmailVerification } from "#emailVeri/hooks/useResendEmailVerification.ts";
import { ToastContainer } from "react-toastify";
export function ResendActivationLinkPage()
{

    const {handleResendverificationEmail, handleEmailChange, email, isLoading} = useResendEmailVerification();
    return (
        <EmailVerificationBody>
            <div className="w-full h-1/10 bg-red-200 flex items-center justify-center">
                <h1 className="text-2xl ">Resend Activation Link</h1>
            </div>
            <div className="w-full h-1/10 mt-10">
                <div className="w-full h-3/10">
                    <label className="ml-3">email</label>
                </div>
                 <div className="w-full h-7/10 flex items-center">
                    <input type="email" placeholder="Joe@example.com" value={email} onChange={handleEmailChange} className="bg-white w-8/10 h-7/10 md:h-8/10 rounded-xl pl-5 focus:outline-none ml-3"/>
                 </div>
            </div>
            <div className="w-full h-1/10  flex justify-center items-center">
                <button type="button" disabled={isLoading} onClick={handleResendverificationEmail} className={`w-6/10 h-6/10 bg-green-400 rounded-xl cursor-pointer ${ !isLoading ? 'hover:bg-green-300' : ''}`}>{isLoading ? 'Requesting...': ' Resend'}</button>
            </div>
            <div className="w-full h-1/10 flex justify-center items-center">
                <p>back to <Link to="/login" className="text-red-400 cursor-pointer">Login</Link></p>
            </div>
            <ToastContainer/>
        </EmailVerificationBody>
    )
}