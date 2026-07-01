import { db } from '#db/db.js'
import { eq } from 'drizzle-orm'
import { type RegisterDTO } from '#dtos/registerDto.js'
import { type loginDTO } from '#dtos/loginDto.js'
import { users } from '#drizzle/schema.js'

export class UserModel {

    async getId(email:string): Promise<number>
    {
        const result = await db.select({id: users.id})
                                .from(users)
                                .where(eq(users.email, email))
        const {id} = result[0]!
        return (id)
    }
    async isUserVerified(email:string) : Promise<boolean>
    {
        const result = await db.select({verified: users.verified})
                                .from(users)
                                .where(eq(users.email, email))
        const {verified} = result[0]!
        return (verified ?? false)
    }
    async getUserCredentials(user_email: string) : Promise<loginDTO | null>
    {
        const user = await db.select({email: users.email, password: users.password})
                        .from(users)
                        .where(eq(users.email, user_email));
        const { email, password } = user[0]!;
        if (!password)
                return (null)
        const user_credentials: loginDTO = {
            email: email,
            password : password
        }
        return (user_credentials)
    }
    /**
     * register the user in the database
     * @returns true on success otherwise false
     */
    async createNewUser(user_data : RegisterDTO): Promise<boolean> {
        try {
                await db.insert(users)
                    .values({
                        email: user_data.email,
                        first_name: user_data.first_name,
                        last_name: user_data.last_name,
                        password: user_data.password,
                        phone_number: user_data.phone_number
                })
            return (true);
        } catch (err) {
            return (false)
        }

    }
    async userExists(email:string): Promise<boolean> {
        try {
            const result = await db
                .select()
                .from(users)
                .where(eq(users.email, email));
            return result.length > 0;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}