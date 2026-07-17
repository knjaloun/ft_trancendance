import { EmailSender } from '#infra/Email/EmailSender.js';
import {generateEmailVerificationTemplate} from '#infra/Email/templates.js'
import { ConnectionFailedError, EmailDeleveringError } from '#errors/EmailErrors.js';

export async function sendVerificationMail(token : string, target_email: string)
{
    const email_verification_body : string = await generateEmailVerificationTemplate(`http://localhost:5173/verify?token=${token}`);
    const mail_sender = new EmailSender({subject : 'Confirm Your Email Address',
                             body : email_verification_body,
                            from: process.env.EMAIL_USER!,
                            to: target_email})
    const can_send_email : boolean = await mail_sender.verifyConnection()
    if (!can_send_email)
    {
        console.log('failure at building email connection with user')
        throw new ConnectionFailedError('failed to connect with user')
    }
    const email_send_success : boolean = await mail_sender.sendMail()
    if (!email_send_success)
    {
        console.log('failure at sending email to user')
        throw new EmailDeleveringError('failed to send Email')
    }
    return true;
}