import {toast} from 'react-toastify'
import { type ApiResponse } from '#shared/types/apiResponse.ts'
import { type NavigateFunction } from 'react-router-dom'

const two_fa_error_notifications = {
    InvalidBodyError : () => {toast.error('Invalid Code')},
    InvalidCodeError: () => {toast.error('Invalid Code')},
    CodeExpiredError : () => {toast.error('Code Expired')},
    TokenError : () => {toast.error('Something went Wrong')},
}

type TwoFaErrorNotification = keyof typeof two_fa_error_notifications;


export function TwoFaNotificationsOrRedirtect(api_response: ApiResponse ,navigate:NavigateFunction)
{
    if (api_response.success)
    {
        navigate('/');
        return;
    }
    if (api_response.message in two_fa_error_notifications)
    {
        two_fa_error_notifications[api_response.message as TwoFaErrorNotification]();
        return;
    }
    toast.error('Unknown Error');
}
