import {z} from 'zod'

export const register_dto = z.object({
    email: z.email().min(1),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    password: z.string().min(8),
    phone_number: z.e164(),
    agree_to_terms: z.boolean() 
})

export type RegisterDTO = z.infer<typeof register_dto>