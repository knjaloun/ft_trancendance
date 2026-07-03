import {z} from 'zod'

export const email_verification_dto = z.object({
    token: z.jwt(),
    user_id : z.number()
})

export type emailVerificationDTO = z.infer<typeof email_verification_dto>