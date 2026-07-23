import { useState } from "react";
import { resendActivationLink } from "#emailVeri/api/resendActivationLink.ts";
import { resendActivationLinkNotification } from "#emailVeri/notification/emailVerificationNotification.ts";
import type { ApiResponse } from "#shared/types/apiResponse.ts";
import { type ChangeEvent } from "react";
export function useResendEmailVerification()
{
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    async function handleResendverificationEmail()
    {
        setLoading(true)
        const response : ApiResponse = await resendActivationLink(email ?? '');
        setLoading(false);
        resendActivationLinkNotification(response, false);
    }
     const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
            }
    return {handleResendverificationEmail, handleEmailChange, email, isLoading}
}