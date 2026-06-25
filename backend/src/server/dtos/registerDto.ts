import {z} from 'zod'

export const registerDTO = z.object({
    email: z.email().min(1),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    password: z.string().min(8),
    phone_number: z.e164() 
})

export type RegisterDTO = z.infer<typeof registerDTO>