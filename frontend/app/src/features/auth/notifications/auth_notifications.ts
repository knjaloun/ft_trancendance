import { toast } from 'react-toastify'
import { type ApiResponse } from '#shared/types/apiResponse.ts'
import { type NavigateFunction } from 'react-router-dom';


const toast_options = {
    pauseOnHover: false
}

const auth_error_notifications = {
    ConnectionRefusedError: () => { toast.error('Service Unavaible', toast_options); },
    InvalidCredentialsError: () => { toast.error('invalid password or email', toast_options); },
    NotVerifiedError: (navigate : NavigateFunction) => { navigate('/checkYourEmail')},
    WorkInProgress: () => { toast.error('Work already in Progress', toast_options); },
    RegisterError: () => { toast.error('failed to register user', toast_options); },
    TermNotAcceptedError: () => { toast.warning('Term of Service not Accepted', toast_options) },
    EmailAlreadyInUseError: (navigate : NavigateFunction) => { navigate('/checkYourEmail') }
} as const;

const login_success_redirections = {
    OK: (navigate : NavigateFunction,  email:string) => {navigate('/2fa/verify', {state :{email:email}})},
    AlreadyAuthenticated: (navigate : NavigateFunction) => {navigate('/')},
}

type AuthNotificationError = keyof  typeof auth_error_notifications
type LoginSucessRedirection = keyof typeof login_success_redirections

export function loginNotificationOrRedirect(api_response: ApiResponse, navigate :NavigateFunction, email:string) {

    console.log(api_response.message)
    if (api_response.success && api_response.message in login_success_redirections) {
        login_success_redirections[api_response.message as LoginSucessRedirection](navigate, email)
        return;
    }
    if (api_response.message in auth_error_notifications) {
        auth_error_notifications[api_response.message as AuthNotificationError](navigate);
    } else {
        toast.error('Unknown error', toast_options);
    }

}

export function registerNotificationOrRedirect(api_response: ApiResponse, navigate :NavigateFunction)  {
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