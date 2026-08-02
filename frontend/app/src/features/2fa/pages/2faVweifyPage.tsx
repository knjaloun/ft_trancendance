import { useState, useRef } from "react"
import { type ChangeEvent } from "react";


const pattern = /^\d*$/;

export function TwoFaVerifyPage() {

    const [code, setcode] = useState(Array(6).fill(""));

    const inputRef = useRef<(HTMLInputElement | null)[]>([]);


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        console.log(`modeifing index : ${index}`)
        let updated_code = e.target.value;
        if (!pattern.test(updated_code))
            updated_code = ""
        const new_code = [...code];

        new_code[index] = updated_code

        setcode(new_code)
        if (index < 5 && updated_code)
            inputRef.current[index + 1]?.focus();
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number, value: string) => {

        if (
            e.key === "Backspace" &&
            e.currentTarget.value === "" &&
            index > 0
        ) {
            inputRef.current[index - 1]?.focus();
        }
    }

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
                            autoFocus={index === 0}
                            key={index}
                            ref={(el: HTMLInputElement | null) => { inputRef.current[index] = el; }}
                            className="h-7/10 w-1/8 bg-white caret-transparent text-2xl border border-gray-400"
                            maxLength={1}
                            value={code[index]}
                            onChange={(e) => { handleInputChange(e, index) }}
                            onKeyDown={(e) => handleKeyDown(e, index, item)}
                        />
                    )
                    )}

                </div>
            </div>
        </div>

    )
}