import { useState } from "react";
import { type ChangeEvent } from "react";
import { loginUser } from "#auth/api/login.ts";
import { loginNotification } from "#notifications/auth_toast.ts";

export function useAuth()
{
      const [email, setEmail] = useState('');
      const [isLoading, setLoading] = useState(false)
        const [password, setPassword] = useState('')
        const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        }
        const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
        }
    
        const handleLogin = async () => {
            setLoading(true)
            const status_code = await loginUser(email, password);
            setLoading(false)
            loginNotification(status_code)
        }
    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        isLoading
    }
}