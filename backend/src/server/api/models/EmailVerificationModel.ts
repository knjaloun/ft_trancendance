import { db } from '#db/db.js'
import { eq } from 'drizzle-orm'
import { email_activation_tokens } from '#drizzle/schema.js'
import { type emailVerificationDTO } from '#dtos/emailVerificationDto.js'

export class EmailVerificationModel
{
    async hasVerificationOpen(id:number) : Promise<boolean>
    {
        const result = await db.select()
                                .from(email_activation_tokens)
                                .where(eq(email_activation_tokens.user_id, id))
        return (result.length > 0)
        
    }

    async UpdateToken(data: emailVerificationDTO) : Promise<boolean>
    {
        try
        {
            await db.update(email_activation_tokens).set({
                token: data.token
            }).where(eq(email_activation_tokens.user_id, data.user_id))
            return true;
        }
        catch(err)
        {
              if (err instanceof Error)
                console.log(`${err.message}`)
            return false;
        }
    }

    async openNewVerification(data: emailVerificationDTO): Promise<boolean>
    {
        try
        {
            await db.insert(email_activation_tokens)
                            .values({
                                user_id: data.user_id,
                                token: data.token
                            })
            return (true);
        }
        catch(err)
        {
            if (err instanceof Error)
                console.log(`${err.message}`)
            return (false);
        }
    }
}