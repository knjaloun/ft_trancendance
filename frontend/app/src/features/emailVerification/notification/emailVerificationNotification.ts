import { type ApiResponse } from "#shared/types/apiResponse.ts";
import { toast } from 'react-toastify'

const toast_options = {
    pauseOnHover: false 
}

const email_verification_notifications = {
    InvalidJWTError : () => { toast.error('Invalid token', toast_options);},
    TokenInvalidError : () => { toast.error('Invalid token', toast_options);},
    TokenExpiredError : () => { toast.error('link has expired', toast_options);},
    AccountAlreadyVerified : () => { toast.warning('account is Already verified', toast_options);},
    ServerError : () => {  toast.error('something went wrong , try again later', toast_options);},
    ConnectionRefusedError : () => {toast.error('Service Unavaible', toast_options);},
    EmailDeleveringError : () => {toast.error('Failed to deliver new Activation Link', toast_options);},
    UnknownTokenError : () => {toast.error('Invalid token', toast_options);},
    InvalidBodyError: () => {toast.error('Invalid Email', toast_options);},
    EmailResendError : () => {toast.error('failed to send Email', toast_options);}

} as const;
type EmailVerificationError = keyof typeof email_verification_notifications;

export function emailVerificationNotification(api_response: ApiResponse) {
    if (api_response.success) {
        toast.success('account verified', toast_options);
        return;
    }
     if (api_response.message in email_verification_notifications) {
            email_verification_notifications[api_response.message as EmailVerificationError]();
        } else {
            toast.error('Unknown error', toast_options);
        }

}

export function resendActivationLinkNotification(api_response: ApiResponse, isrefresh:boolean)
{
     if (api_response.success) {
        toast.success( !isrefresh ? 'sent Email' : 'sent new Activation link to your inbox', toast_options);
        return;
    }
     if (api_response.message in email_verification_notifications) {
            email_verification_notifications[api_response.message as EmailVerificationError]();
        } else {
            toast.error('Unknown error', toast_options);
        }
}