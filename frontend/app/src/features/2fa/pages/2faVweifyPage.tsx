import { Link } from "react-router-dom";
import { use2Fa } from "../hooks/use2fa";
import { ToastContainer } from "react-toastify";

export function TwoFaVerifyPage() {

    const { handleVerify2FACode,handleInputChange, handleKeyDown, inputRef, code, isLoading } = use2Fa();

    return (

        <div className="w-full h-full flex items-center justify-center">
            <div className="h-8/10 w-8/10 bg-gray-100 max-w-150 max-h-200">
                <div className="h-1/10 w-full flex items-center justify-center">
                    <h1 className="text-xl"> Please Enter Your 2Fa Code</h1>
                </div>
                <div className="h-1/10 w-full flex  justify-center">
                    <p className="text-gray-400">we have sent you the code to your email inbox</p>
                </div>
                <div className="h-1/10 w-full flex justify-center items-center gap-2">
                    {code.map((item: string, index: number) => (
                        <input
                            key={index}
                            ref={(el: HTMLInputElement | null) => { inputRef.current[index] = el; }}
                            className="h-7/10 w-1/8 bg-white caret-transparent text-2xl border border-gray-400"
                            maxLength={1}
                            value={code[index]}
                            onChange={(e) => { handleInputChange(e, index) }}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    )
                    )}

                </div>
                <div className="w-full h-1/10 flex justify-center items-center">
                    <button type="button" disabled={isLoading} onClick={handleVerify2FACode} className="h-6/10 w-7/10 bg-red-400 hover:bg-red-300 text-white rounded-xl cursor-pointer">Verify</button>
                </div>
                <div className="w-full h-1/10 flex justify-center items-center">
                    <p>back to <Link to="/login" className="text-red-400 cursor-pointer">Login</Link></p>
                </div>
                <ToastContainer/>
            </div>
        </div>

    )
}