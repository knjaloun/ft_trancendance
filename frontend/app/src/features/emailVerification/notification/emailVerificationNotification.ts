import { type ApiResponse } from "#shared/types/apiResponse.ts";
import { toast } from 'react-toastify'

export function emailVerificationNotification(api_response: ApiResponse) {
    if (api_response.sucess) {
        toast.success('account verified', { pauseOnHover: false });
        return;
    }
    if (api_response.message === 'InvalidJWTError' || api_response.message === 'TokenInvalidError') {
        toast.error('Invalid token', { pauseOnHover: false });
        return;
    }
    if (api_response.message === 'TokenExpiredError') {
        toast.error('link has expired', { pauseOnHover: false });
        return;
    }
    if (api_response.message === 'AccountAlreadyVerified')
    {
        toast.warning('account is Already verified', { pauseOnHover: false });
        return;
    }
    if (api_response.message === 'ServerError')
    {
         toast.error('something went wrong , try again later', { pauseOnHover: false });
        return;
    }
    if(api_response.message === 'ConnectionRefusedError')
    {
         toast.error('Service Unavaible', {pauseOnHover: false });
        return;
    }
    toast.error('unknown Error , try again later', { pauseOnHover: false });
}