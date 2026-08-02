import { EmailSender } from '#infra/Email/EmailSender.js';
import {generateEmailVerificationTemplate, generate2FaTemplate} from '#infra/Email/templates.js'
import { ConnectionFailedError, EmailDeleveringError } from '#errors/EmailErrors.js';

export async function sendVerificationOr2FaMail(target_email: string, type: '2fa' | 'EmailVerification', data: string,)
{
    let email_body : string ='';
    let sub: string = ''
    if (type === 'EmailVerification')
    {
        const app_url : string = process.env.APP_URL ?? 'http://localhost:5173';
        email_body = await generateEmailVerificationTemplate(`${app_url}/verify?token=${data}`);
        sub = 'Confirm Your Email Address';
    }
    else
    {
        email_body = await generate2FaTemplate(data);
         sub = 'Your Verification Code';
    }

    const mail_sender = new EmailSender({subject : sub,
                             body : email_body,
                            from: process.env.EMAIL_USER!,
                            to: target_email})
    const can_send_email : boolean = await mail_sender.verifyConnection()
    if (!can_send_email)
    {
        console.log('failure at building email connection with user')
        throw new ConnectionFailedError('EmailDeleveringError')
    }
    const email_send_success : boolean = await mail_sender.sendMail()
    if (!email_send_success)
    {
        console.log('failure at sending email to user')
        throw new EmailDeleveringError('EmailDeleveringError')
    }
}