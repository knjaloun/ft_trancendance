import {z} from 'zod'

export const email_sender_dto = z.object({
    subject: z.string().min(1),
    body : z.string().min(1),
    from: z.email(),
    to: z.email()
})

export type emailSenderDTO = z.infer<typeof email_sender_dto>