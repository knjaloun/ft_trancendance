import {z} from 'zod'

export const user_dto = z.object({
    email: z.email(),
    password: z.string().min(8),
    id : z.number().min(1),
    verified: z.boolean()
})
export type userDTO = z.infer<typeof user_dto>