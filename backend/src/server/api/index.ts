import express from 'express'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'


const env = dotenv.config({path: '../.env'})
dotenvExpand.expand(env)

const app = express()
const port = 3000

//const db = drizzle(process.env.DATABASE_URL!)


app.listen(port, ()=>{
    console.log(`app listens on port ${port}`)
})