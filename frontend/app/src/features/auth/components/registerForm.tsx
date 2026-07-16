import { Link } from "react-router-dom"
import  {useRegister} from '#auth/hooks/useRegister.ts'


export function RegisterForm() {

    const {state, handleFirstNameChange, 
        handleLastNameChange, 
        handlePhoneNumberNameChange, 
        handleEmailChange, 
        handlePasswordChange,
        handleAgreeToTermsChange,
        handleRegistration,
        isLoading} = useRegister()
    return (
        <form className="w-8/10 h-full  max-w-120">
            <div className="w-full h-1/10  font-sans font-bold text-xl sm:text-2xl flex justify-center items-center">CREATE ACCOUNT</div>
            <div className="w-full h-7/10 min-h-130">
                <div className="w-full h-1/7 max-h-30">
                    <div className="w-full h-3/10">
                        <label>first name</label>
                    </div>
                    <div className="w-full h-7/10 ">
                        <input type="text" value={state.first_name} onChange={handleFirstNameChange} placeholder="Joe" className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div>
                </div>
                <div className="w-full h-1/7 max-h-30">
                    <div className="w-full h-3/10 ">
                        <label>last name</label>
                    </div>

                    <div className="w-full h-7/10 ">
                        <input type="text" placeholder="Doe" value={state.last_name} onChange={handleLastNameChange} className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div>
                </div>
                <div className="w-full h-1/7 max-h-30">
                    <div className="w-full h-3/10 ">
                        <label>phone number</label>
                    </div>

                    <div className="w-full h-7/10 ">
                        <input type="text" placeholder="+14155552671" value={state.phone_number} onChange={handlePhoneNumberNameChange} className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div>
                </div>
                <div className="w-full h-1/7 max-h-30">
                    <div className="w-full h-3/10 ">
                        <label>Email</label>
                    </div>

                    <div className="w-full h-7/10 ">
                        <input type="email" placeholder="Joe@example.com" value={state.email} onChange={handleEmailChange} className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div></div>
                <div className="w-full h-1/7 max-h-30">

                    <div className="w-full h-3/10 ">
                        <label>Password</label>
                    </div>

                    <div className="w-full h-7/10 ">
                        <input type="password" placeholder="Password" value={state.password} onChange={handlePasswordChange} className="bg-white pl-5 h-7/10 w-8/10 rounded-xl focus:outline-none max-h-17" />
                    </div>
                </div>
                <div className="w-full h-1/18">
                    <input type="checkbox" checked={state.agree_to_terms} onChange={handleAgreeToTermsChange}/>
                    <label className="ml-3 text-xs xl:text-sm">I agree to the <a href="" className="text-blue-500 underline">Term</a> of service and <a href="" className="text-blue-500 underline">Private</a> Policy</label>
                </div>
                <div className="w-full h-1/7 mt-7 sm:mt-3 min-h-18 max-h-40">
                    <div className="w-full h-1/2">
                        <button disabled={isLoading} type="button" onClick={handleRegistration} className={`w-8/10 h-8/10 bg-red-400 rounded-xl ${ !isLoading ? "hover:bg-red-300" : ""} cursor-pointer text-white`}>{isLoading ? "loading..." : "register"}</button>

                    </div>
                    <div className="w-full h-1/2">
                        <p className="text-sm xl:text-sm">Already Registered? <Link to="/login" className="text-red-600 ml-2">Login</Link></p>
                    </div>
                </div>
            </div>
        </form>
        
    )
}