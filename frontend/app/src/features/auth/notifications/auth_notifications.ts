import { toast } from 'react-toastify'
import { type ApiResponse } from '#shared/types/apiResponse.ts';
type Navigate = (route: string) => void;
const toast_options = {
    pauseOnHover: false
}

const auth_error_notifications = {
    ConnectionRefusedError: () => { toast.error('Service Unavaible', toast_options); },
    InvalidCredentialsError: () => { toast.error('invalid password or email', toast_options); },
    NotVerifiedError: (navigate : Navigate) => { navigate('/checkYourEmail')},
    WorkInProgress: () => { toast.error('Work already in Progress', toast_options); },
    RegisterError: () => { toast.error('failed to register user', toast_options); },
    TermNotAcceptedError: () => { toast.warning('Term of Service not Accepted', toast_options) },
    EmailAlreadyInUseError: (navigate : Navigate) => { navigate('/checkYourEmail') }
} as const;

type AuthNotificationError = keyof  typeof auth_error_notifications

export function loginNotificationOrRedirect(api_response: ApiResponse, navigate :Navigate ) {
    if (api_response.success) {
        toast.success('welcome')
        return;
    }
    if (api_response.message in auth_error_notifications) {
        auth_error_notifications[api_response.message as AuthNotificationError](navigate);
    } else {
        toast.error('Unknown error', toast_options);
    }

}

export function registerNotificationOrRedirect(api_response: ApiResponse, navigate :Navigate)  {
    if (api_response.success) {
       navigate('/checkYourEmail')
        return;
    }
    if (api_response.message in auth_error_notifications) {
        auth_error_notifications[api_response.message as AuthNotificationError](navigate);
    } else {
        toast.error('Unknown error', toast_options);
    }
}