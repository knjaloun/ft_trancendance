

export async function generateEmailVerificationTemplate(data: string)
{
    return(`
    Hi,

    Thanks for signing up!

    Please verify your email address by clicking the link below:

    Verify Email: ${data}

    If you didn't create this account, you can safely ignore this email.

    This verification link will expire in 24 hours.

    Thanks,
    The Support Team
    `)
}

export async function generate2FaTemplate(code:string)
{
    return (`
        Hello,

        Your verification code is: ${code}

        This code will expire in 15 minutes.

        If you did not request this code, you can safely ignore this email. For your security, do not share this code with anyone.

        Thank you,
        The Support Team      
        `)
}
