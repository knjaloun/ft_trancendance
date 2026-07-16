import { toast } from 'react-toastify'

export function loginNotification(status_code:number) {
    if (status_code === 200)
    {
        toast.success('welcome')
        return;
    }  
    if (status_code === 503)
    {
        toast.error('Service Unavaible', {pauseOnHover: false});
        return;
    }
    if (status_code === 401 || status_code === 400) {
        toast.error('invalid password or email', {pauseOnHover: false});
        return;
    }
    if(status_code === 403)
    {
         toast.info('account not verified', {pauseOnHover: false})
         return;
    }
    toast.error('unknown error', {pauseOnHover: false})
}

export function registerNotification(status_code:number) {
    if (status_code === 201)
    {
        toast.success('user created')
        return;
    }  
    if (status_code === 503)
    {
        toast.error('Service Unavaible', {pauseOnHover: false });
        return;
    }
    if (status_code === 400) {
        toast.error('failed to register user', {pauseOnHover: false});
        return;
    }
    if(status_code === 403)
    {
         toast.warning('Term of Service not Accepted', {pauseOnHover: false})
         return;
    }
    if (status_code === 409)
    {
        toast.error('this email is already in use', {pauseOnHover: false})
        return;
    }
    toast.error('unknown error', {pauseOnHover: false})
}