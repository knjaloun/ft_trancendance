import {z} from 'zod'


export const two_factor_auth_verify_dto = z.object({
    email: z.email(),
    code: z.string().min(1)
})

export const two_factor_auth_dto = z.object({
    email: z.email()
})

export type twofactorAuthVerifyDto = z.infer<typeof two_factor_auth_verify_dto>;