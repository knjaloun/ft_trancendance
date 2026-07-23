import {z} from 'zod'

export const email_verification_dto = z.object({
    token: z.jwt(),
    user_id : z.number()
})

export const resend_email_verification_dto = z.object({
    email: z.email()
})

export type emailVerificationDTO = z.infer<typeof email_verification_dto>

export type resendEmailVerificationDTO = z.infer<typeof resend_email_verification_dto>