import { toast } from 'react-toastify'
import { type ApiResponse } from '#shared/types/apiResponse.ts';

export function loginNotification(api_response: ApiResponse) {
    if (api_response.sucess)
    {
        toast.success('welcome')
        return;
    }  
    if (api_response.message === 'ConnectionRefusedError')
    {
        toast.error('Service Unavaible', {pauseOnHover: false});
        return;
    }
    if (api_response.message === 'InvalidCredentialsError' || api_response.message === 'invalidBodyError') {
        toast.error('invalid password or email', {pauseOnHover: false});
        return;
    }
    if(api_response.message === 'NotVerifiedError')
    {
         toast.warning('account not verified', {pauseOnHover: false})
         return;
    }
    toast.error('unknown error', {pauseOnHover: false})
}

export function registerNotification(api_response: ApiResponse) {
    if (api_response.sucess)
    {
        toast.success('user created')
        return;
    }  
    if (api_response.message === 'WorkInProgress')
    {
        toast.error('Work already in Progress', {pauseOnHover: false });
        return;
    }
    if (api_response.message === 'ConnectionRefusedError')
    {
        toast.error('Service Unavaible', {pauseOnHover: false });
        return;
    }
    if (api_response.message === 'RegisterError' || api_response.message === 'invalidBodyError') {
        console.log(api_response.message)
        toast.error('failed to register user', {pauseOnHover: false});
        return;
    }
    if(api_response.message === 'TermNotAcceptedError')
    {
         toast.warning('Term of Service not Accepted', {pauseOnHover: false})
         return;
    }
    if (api_response.message === 'EmailAlreadyInUseError')
    {
        toast.error('this email is already in use', {pauseOnHover: false})
        return;
    }
    toast.error('unknown error', {pauseOnHover: false})
}