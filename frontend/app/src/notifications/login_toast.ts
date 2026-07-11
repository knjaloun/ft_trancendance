import { toast } from 'react-toastify'

export function loginNotification(isError: boolean, ErrorType: string) {
    if (!isError)
    {
        toast.success('welcome')
        return;
    }  
    if (ErrorType === 'ServerError')
    {
        toast.error('Couldn\'t connect to the server', {pauseOnHover: false});
        return;
    }
    if (ErrorType === 'invalidBodyError') {
        toast.error('email or password is Empty', {pauseOnHover: false});
        return;
    }
    if (ErrorType === 'InvalidCredentialsError') {
        toast.error('invalid password or email', {pauseOnHover: false});
        return;
    }
    if(ErrorType === 'NotVerifiedError')
    {
         toast.info('account not verified', {pauseOnHover: false})
         return;
    }
    toast.error('unknown error', {pauseOnHover: false})
}