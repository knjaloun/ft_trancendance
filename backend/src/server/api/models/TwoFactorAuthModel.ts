import { db } from '#db/db.js'
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
}