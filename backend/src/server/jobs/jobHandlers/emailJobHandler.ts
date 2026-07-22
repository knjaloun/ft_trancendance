import { createEmailVerification } from "#emailVeri/services/create.js";
import { sendVerificationMail } from "#emailVeri/services/sendVerificationMail.js";

export async function handleCreateEmailVerification(email:string)
{
    const token = await createEmailVerification(email);
    await sendVerificationMail(token, email); 
}

export async function handleEmailSend(email:string, token:string)
{
    await sendVerificationMail(token, email);
}