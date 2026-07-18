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
    ConnectionRefusedError : () => {toast.error('Service Unavaible', toast_options);}
}

export function emailVerificationNotification(api_response: ApiResponse) {
    console.log(api_response.message)
    if (api_response.success) {
        toast.success('account verified', toast_options);
        return;
    }
     if (api_response.message in email_verification_notifications) {
            email_verification_notifications[api_response.message]();
        } else {
            toast.error('Unknown error', toast_options);
        }

}