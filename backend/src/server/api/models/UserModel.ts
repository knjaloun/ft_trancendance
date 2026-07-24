import { db } from '#db/db.js'
import { eq } from 'drizzle-orm'
import { type RegisterDTO } from '#auth/dtos/registerDto.js'
import { users } from '#drizzle/schema.js'
import {type UserData} from '#auth/types/userType.js'
import { profile } from '#drizzle/schema.js'

export class UserModel {

    async getId(email:string): Promise<number>
    {
        const result = await db.select({id: users.id})
                                .from(users)
                                .where(eq(users.email, email))
        const {id} = result[0]!
        return (id)
    }
     async isUserVerifiedById(user_id:number) : Promise<boolean>
    {
        const result = await db.select({verified: users.verified})
                                .from(users)
                                .where(eq(users.id, user_id))
        const {verified} = result[0]!
        return (verified ?? false)
    }
    async getverificationStatusAndEmail(user_id: number) : Promise<Pick<UserData, 'verified' | 'email'>>
    {

        const result = await db.select({verified: users.verified, email: users.email})
                                .from(users)
                                .where(eq(users.id, user_id))
        const {verified, email} = result[0]!

        const data = {
            verified : verified ?? false,
            email: email
        }
        return (data);
    }

    async getUser(user_email: string) : Promise<UserData | null>
    {
        const result = await db.select({email: users.email, password: users.password, id: users.id, verified: users.verified})
                        .from(users)
                        .where(eq(users.email, user_email));
        if (result.length <= 0)
            return (null)
        const { email, password, id, verified } = result[0]!;
        if (!password)
                return (null)
        const user_data: UserData = {
            email: email,
            password : password,
            id: id,
            verified: verified ?? false
        }
        return (user_data)
    }
    /**
     * register the user in the database
     * @returns true on success otherwise false
     */
    async createNewUser(user_data : RegisterDTO): Promise<boolean> {
        try {
            await db.transaction(async (tx) =>{
                const user_res = await tx.insert(users)
                    .values({
                        email: user_data.email,
                        first_name: user_data.first_name,
                        last_name: user_data.last_name,
                        password: user_data.password,
                        phone_number: user_data.phone_number
                });
                await tx.insert(profile)
                    .values({
                        user_id: user_res[0].insertId
                    });
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
    async activateUser(user_id: number) : Promise<boolean>
    {
        try{
            await db.update(users).set({verified:true}).where(eq(users.id, user_id))
            return (true)
        }catch(err)
        {
            return (false)
        }
    }
}