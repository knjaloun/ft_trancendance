import { useState, useRef, useEffect } from "react"
import { type ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verify2faCode } from "../api/verify2FaCode";
import { type LocationState } from "../types/locationType";
import { TwoFaNotificationsOrRedirtect } from "../notifications/notification2fa";


export function use2Fa()
{
    const pattern = /^\d*$/;
    const [code, setcode] = useState(Array(6).fill(""));

    const inputRef = useRef<(HTMLInputElement | null)[]>([]);
    const location = useLocation();
    const navigate = useNavigate();



    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        let updated_code = e.target.value;
        if (!pattern.test(updated_code))
            updated_code = ""
        const new_code = [...code];

        new_code[index] = updated_code

        setcode(new_code)
        if (index < 5 && updated_code)
            inputRef.current[index + 1]?.focus();
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {

        if (
            e.key === "Backspace" &&
            e.currentTarget.value === "" &&
            index > 0
        ) {
            inputRef.current[index - 1]?.focus();
        }
    }

    async function handleVerify2FACode()
    {
        const response = await verify2faCode(code.join(''), (location.state as LocationState).email ?? '');
        TwoFaNotificationsOrRedirtect(response, navigate);

    }

    useEffect(() =>{
        inputRef.current[0]?.focus();
    }, [])

    

    return {handleVerify2FACode, handleInputChange, handleKeyDown, inputRef,code}
}