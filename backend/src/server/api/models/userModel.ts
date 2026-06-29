import { db } from '#db/db.js'
import { eq } from 'drizzle-orm'
import { type RegisterDTO } from '#dtos/registerDto.js'
import { type loginDTO } from '#dtos/loginDto.js'
import { users } from '#drizzle/schema.js'

export class UserModel {
    private readonly user_data: RegisterDTO | loginDTO
    constructor(data: RegisterDTO | loginDTO) {
        this.user_data = data
    }

    async getUserCredentials() : Promise<loginDTO | null>
    {
        const user = await db.select({email: users.email, password: users.password})
                        .from(users)
                        .where(eq(users.email, this.user_data.email));
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
    async createNewUser(): Promise<boolean> {

        if (!('first_name' in this.user_data))
            return false;
        try {
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
        } catch (err) {
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