import express from 'express'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import authRouter from '#auth/route/auth.routing.js'

//loading enviroment variables from the .env file
const env = dotenv.config({path: '../../.env'})
dotenvExpand.expand(env)

const app = express()
app.use(express.json());
const port = process.env.PORT ?? 3000

app.use('/api/auth', authRouter)

app.listen(port, ()=>{
    console.log(`app listens on port ${port}`)
})