
import { Link } from "react-router-dom"
import { EmailVerificationBody } from "#emailVeri/components/EmailVerificationBody.tsx"
export function CheckYourEmailPage() {
    return (
        <EmailVerificationBody>
            <div className="w-full h-2/10">
                <div className="w-full h-1/2 bg-red-300 flex justify-center items-center font-semibold">
                    <h1 className="text-2xl font-sans"> Check Your Email</h1>
                </div>
                <div className="w-full h-1/2 flex items-center justify-center"><p className="text-md">We have send you an activation link to you Email inbox</p></div>
            </div>
            <div className="w-full h-1/10 flex items-center justify-center">
                <p>didnt recieve Email? <Link to="/verify/resend" className="text-red-400 cursor-pointer">Resend</Link></p>
            </div>
        </EmailVerificationBody>

    )
}