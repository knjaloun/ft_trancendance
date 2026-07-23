import { type ApiResponse } from "#shared/types/apiResponse.ts";
import { emailVerificationNotification } from "#emailVeri/notification/emailVerificationNotification.ts";
import { verifyEmail } from "#emailVeri/api/verify.ts";
import { refreshActivationLink } from "#emailVeri/api/refreshActivationLink.ts";
import { resendActivationLinkNotification } from "#emailVeri/notification/emailVerificationNotification.ts";
import { useState } from "react";

export function useEmailVerification() {

    const [isLoading, setLoading] = useState(false);
    async function handleVerifyEmail() {
        const activation_token: string | null = new URLSearchParams(window.location.search).get('token');
        setLoading(true);
        const response: ApiResponse = await verifyEmail(activation_token);
        setLoading(false)
        emailVerificationNotification(response);
    }
    async function handleSendNewActivationLink()
    {
        const activation_token: string | null = new URLSearchParams(window.location.search).get('token');
        setLoading(true);
        const response: ApiResponse = await refreshActivationLink(activation_token);
        setLoading(false);
        resendActivationLinkNotification(response, true);
    }
    return {
        handleVerifyEmail,
        handleSendNewActivationLink,
        isLoading
    }
}