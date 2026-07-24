import {z} from 'zod'


export const two_factor_auth_dto = z.object({
    email: z.email()
})

export type twofactorAuthDto = z.infer<typeof two_factor_auth_dto>;