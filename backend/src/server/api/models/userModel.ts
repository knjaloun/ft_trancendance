import {db} from '#db/db.js'
import {eq} from 'drizzle-orm'
import { type RegisterDTO } from '#dtos/registerDto.js'
import {users} from '#drizzle/schema.js'

export class UserModel
{
    private readonly user_data: RegisterDTO
    constructor(data:RegisterDTO)
    {
        this.user_data = data
    }
    /**
     * register the user in the database
     * @returns true on success otherwise false
     */
    async createNewUser(): Promise<boolean>
    {
        try{
            const result = await db.insert(users)
                                    .values({
                                        email: this.user_data.email,
                                        first_name: this.user_data.first_name,
                                        last_name: this.user_data.last_name,
                                        password: this.user_data.password,
                                        phone_number: this.user_data.phone_number
                                    })
            console.log(`register user success : ${result}`)
            return (true);
            } catch(err)
            {
                return (false)
            }
                                            
    }
   async userExists(): Promise<boolean> {
    try {
        const result = await db
            .select()
            .from(users)
            .where(eq(users.email, this.user_data.email));

        return result.length > 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}
}