import { toast } from 'react-toastify'

export function loginNotification(isError: boolean, ErrorType: string) {
    if (!isError)
    {
        toast.success('welcome')
        return;
    }
    if (ErrorType === 'invalidBodyError') {
        toast.error('email or password is Empty');
        return;
    }
    if (ErrorType === 'InvalidCredentialsError') {
        toast.error('invalid password or email');
        return;
    }
    if(ErrorType === 'NotVerifiedError')
    {
         toast.info('account not verified')
         return;
    }
    toast.error('unknown error')
}