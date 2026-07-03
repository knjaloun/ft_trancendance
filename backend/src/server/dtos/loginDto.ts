import {z} from 'zod'

export const login_dto = z.object({
    email: z.email(),
    password: z.string().min(8)
})

export const auth_dto = z.object({
    email: z.email(),
    password: z.string().min(8),
    id : z.number().min(1),
    verified: z.boolean()
})
export type authDTO = z.infer<typeof auth_dto>
export type loginDTO = z.infer<typeof login_dto>