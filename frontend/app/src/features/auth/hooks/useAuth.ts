import { useState } from "react";
import { type ChangeEvent } from "react";
import { loginUser } from "#auth/api/login.ts";
import { loginNotification } from "#notifications/login_toast.ts";

export function useAuth()
{
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
    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleLogin
    }
}