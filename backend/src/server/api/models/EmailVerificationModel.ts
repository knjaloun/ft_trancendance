import { db } from '#db/db.js'
import { eq } from 'drizzle-orm'
import { email_activation_tokens } from '#drizzle/schema.js'
import { type emailVerificationDTO } from '#emailVeri/dtos/emailVerificationDto.js'

export class EmailVerificationModel
{
    async updateToken(data: emailVerificationDTO) : Promise<boolean>
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
    async getUserIdByToken(token: string) : Promise<number | undefined>
    {
        try
        {
            const result = await db.select({user_id: email_activation_tokens.user_id})
                                .from(email_activation_tokens)
                                .where(eq(email_activation_tokens.token, token))
             const {user_id} = result[0]!
            return(user_id ?? undefined)                   
        }
        catch(err)
        {
            return(undefined)
        }
       

    }

    async tokenExists(token: string) : Promise<boolean>
    {
        const result = await db.select().
                            from(email_activation_tokens)
                            .where(eq(email_activation_tokens.token, token))
        return (result.length > 0)

    }
    async deleteVerification(user_id: number) : Promise<boolean>
    {
        try
        {
            await db.delete(email_activation_tokens).where(eq(email_activation_tokens.user_id, user_id))
            return (true)
        }
        catch(err)
        {
            return false;
        }
    }
}