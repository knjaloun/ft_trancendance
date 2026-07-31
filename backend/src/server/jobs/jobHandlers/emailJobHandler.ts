import { createEmailVerification } from "#emailVeri/services/create.js";
import { sendVerificationOr2FaMail } from "#utils/mailSender.js";
import { createOrReplaceTwoFactorAuthAndValidate } from "#2fa/services/create2fa.js";

export async function handleCreateEmailVerification(email:string)
{
    const token = await createEmailVerification(email);
    await sendVerificationOr2FaMail(email, 'EmailVerification', token); 
}

export async function handleEmailSend(email:string, token:string)
{
    await sendVerificationOr2FaMail(email, 'EmailVerification', token); 
}

export async function handle2facreationAndSend(email: string)
{
    const code = await createOrReplaceTwoFactorAuthAndValidate(email);
    await sendVerificationOr2FaMail(email, '2fa', code);
}

export async function handle2FaEmailSend(email:string, code:string)
{
    await sendVerificationOr2FaMail(email, '2fa', code);
}