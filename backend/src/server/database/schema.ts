
import {mysqlTable, serial, varchar, timestamp,date, mysqlEnum, boolean, int, real, text} from 'drizzle-orm/mysql-core'
import { sql } from "drizzle-orm";


export const users = mysqlTable('users', {
    id : serial('id').primaryKey(),
    first_name: varchar('first_name', {length: 255}).notNull(),
    last_name: varchar('last_name',{length: 255}),
    email: varchar('email',{length: 255}).unique().notNull(),
    password: varchar('password',{length:255}),
    salt: varchar('salt', {length: 255}),
    created_at: timestamp('created_at').defaultNow(),
    role: mysqlEnum('role', ['user', 'admin']).notNull(),
    status: mysqlEnum('status', ['blocked', 'banned', 'active']).notNull(),
    verified: boolean('verified').notNull(),
    phone_number: varchar('phone_number', {length: 30})
})

export const email_activation_codes = mysqlTable('email_activation_code', {
    id : serial('id').primaryKey(),
    code: varchar('code', {length: 10}).unique().notNull(),
    created_at: timestamp('created_at').defaultNow(),
    expires_at : timestamp('expires_at').default(sql`TIMESTAMPADD(MINUTES, 15, NOW()`),
    user_id: int('user_id').references(() => users.id)

})

export const two_factors_code = mysqlTable('two_factors_code', {
    id: serial('id').primaryKey(),
    code: varchar('code', {length : 10}).unique().notNull(),
    created_at: timestamp('created_at').defaultNow(),
    expires_at : timestamp('expires_at').default(sql`TIMESTAMPADD(MINUTES, 15, NOW()`),
    user_id: int ('user_id').references(() => users.id)
})

export const cars = mysqlTable('cars', {
    id: serial('id').primaryKey(),
    brand: mysqlEnum('brand', ['bmw', 'mclaren', 'mercedes', 'volkswagen', 'audi', 'toyota', 'lamborghini', 'ford', 'rangeRover']).notNull(),
    type: mysqlEnum('type', ['sportscar', 'van', 'suv', 'limousine', 'pickup']).notNull(),
    model: varchar('model', {length: 255}).notNull(),
    daily_rate: real().notNull(),
    horse_power: int('horse_power').notNull(),
    country: mysqlEnum('country', ['france', 'germany', 'dubai', 'luxembourg', 'belgium', 'autria']).notNull(),
    usage: int('usage').notNull(),
    available: boolean('available').notNull(),
    owner_id: int('owner_id').references(() => users.id).notNull(),
    picture: varchar('picture', {length: 255}).notNull(),
})

export const bookings = mysqlTable('bookings', {
    id : serial('id').primaryKey(),
    client_id: int('client_id').references(() => users.id).notNull(),
    owner_id : int('owner_id').references(() => users.id).notNull(),
    start_date: date('start_date').default(sql`CURDATE()`).notNull(),
    end_date: date('end_date').notNull(),
    car_id: int('car_id').references(()=> cars.id),
    status: mysqlEnum('status',['pending', 'confirmed', 'canceled']).notNull()
})

export const profile = mysqlTable('profile', {
    id:serial('is').primaryKey(),
    user_id: int('user_id').references(()=> users.id).notNull(),
    avatar: varchar('avatar',{length: 255}),
    description: text(),
    country: mysqlEnum('country', ['france', 'germany', 'dubai', 'luxembourg', 'belgium', 'autria']).notNull()
})