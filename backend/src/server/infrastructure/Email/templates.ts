

export async function generateEmailVerificationTemplate(token: string)
{
    return(`
    Hi,

    Thanks for signing up!

    Please verify your email address by clicking the link below:

    Verify Email: ${token}

    If you didn't create this account, you can safely ignore this email.

    This verification link will expire in 24 hours.

    Thanks,
    The Support Team
    `)
}
