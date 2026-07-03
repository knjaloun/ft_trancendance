import { EmailSender } from '#infra/Email/EmailSender.js';
import {generateEmailVerificationTemplate} from '#infra/Email/templates.js'

export async function sendEmailVerificationMail(token : string, target_email: string) : Promise<boolean>
{
    const email_verification_body : string = await generateEmailVerificationTemplate(token);
    const mail_sender = new EmailSender({subject : 'Confirm Your Email Address',
                             body : email_verification_body,
                            from: process.env.EMAIL_USER!,
                            to: target_email})
    const can_send_email : boolean = await mail_sender.verifyConnection()
    if (!can_send_email)
    {
        console.log('failure at vuilding email connection with user')
       return false;
    }
    const email_send_success : boolean = await mail_sender.sendMail()
    if (!email_send_success)
    {
        console.log('failure at sending email to user')
        return (false);
    }
    return true;

}