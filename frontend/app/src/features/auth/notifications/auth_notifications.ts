import { toast } from 'react-toastify'
import { type ApiResponse } from '#shared/types/apiResponse.ts';

const toast_options = {
    pauseOnHover: false
}

const auth_error_notifications = {
    ConnectionRefusedError: () => { toast.error('Service Unavaible', toast_options); },
    InvalidCredentialsError: () => { toast.error('invalid password or email', toast_options); },
    NotVerifiedError: () => { toast.warning('account not verified', toast_options) },
    WorkInProgress: () => { toast.error('Work already in Progress', toast_options); },
    RegisterError: () => { toast.error('failed to register user', toast_options); },
    TermNotAcceptedError: () => { toast.warning('Term of Service not Accepted', toast_options) },
    EmailAlreadyInUseError: () => { toast.error('this email is already in use', toast_options) }
}



export function loginNotification(api_response: ApiResponse) {
    if (api_response.success) {
        toast.success('welcome')
        return;
    }
    if (api_response.message in auth_error_notifications) {
        auth_error_notifications[api_response.message]();
    } else {
        toast.error('Unknown error', toast_options);
    }

}

export function registerNotification(api_response: ApiResponse) {
    if (api_response.success) {
        toast.success('user created')
        return;
    }
    if (api_response.message in auth_error_notifications) {
        auth_error_notifications[api_response.message]();
    } else {
        toast.error('Unknown error', toast_options);
    }
}