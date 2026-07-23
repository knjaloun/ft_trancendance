import { useState } from "react";
import { type ChangeEvent } from "react";
import { loginUser } from "#auth/api/login.ts";
import { loginNotificationOrRedirect } from "#auth/notifications/auth_notifications.ts";
import { type ApiResponse } from "#shared/types/apiResponse.ts";
import { useNavigate } from "react-router-dom";


export function useAuth() {
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        setLoading(true)
        const response: ApiResponse = await loginUser(email, password);
        setLoading(false)
        loginNotificationOrRedirect(response, navigate)
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