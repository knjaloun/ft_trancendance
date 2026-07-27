import { db } from '#db/db.js'
import { eq } from 'drizzle-orm';
import { two_factors_code } from '#drizzle/schema.js'

export class TwoFactorAuthModel {
    async openNew2Fa(token: string, user_id: number) {
        try {
            await db.insert(two_factors_code).values({
                token: token,
                user_id: user_id
            });
            return (true)
        } catch (err) {
            console.log(err);
            return (false);
        }
    }
    async getUserTokenById(user_id: number): Promise<string| null>
    {
        try{
            const result = await db.select({token : two_factors_code.token}).
                                        from(two_factors_code).
                                        where(eq(two_factors_code.user_id, user_id));
            const {token} = result[0]!
            return (token ?? null)
        }catch (err)
        {
            console.log(err)
            return (null)
        }
    }
}