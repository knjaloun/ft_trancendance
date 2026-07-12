import { type EmailPayload } from "#infra/Email/types/emailPayload.js";
import { transporter } from "./emailTransporter.js";
import nodemailer from 'nodemailer'

export class EmailSender
{
    private readonly body: string;
    private readonly subject: string;
    private readonly from :string;
    private readonly to : string;

    constructor(data : EmailPayload)
    {
        this.body = data.body
        this.subject = data.subject
        this.from = data.from
        this.to = data.to
    }

    async verifyConnection() : Promise<boolean>
    {
        try {
            await transporter.verify();
            console.log("Server is ready to take our messages");
            return (true);

        } catch (err) 
        {
            console.error("Verification failed:", err);
            return (false)

        }
    }

    async sendMail() : Promise<boolean>
    {
        try {
            const info = await transporter.sendMail({
            from: this.from,
            to: this.to,
            subject: this.subject,
            text: this.body, 
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        return (true);
        } catch (err)
        {
            console.error("Error while sending mail:", err);
            return (false);
        }
    }

}