import {z} from 'zod'

export const login_dto = z.object({
    email: z.email(),
    password: z.string().min(8)
})
export type loginDTO = z.infer<typeof login_dto>