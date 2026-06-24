import express from 'express'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import {db} from '../database/db.js'


const env = dotenv.config({path: '../../.env'})
console.log(process.cwd())
dotenvExpand.expand(env)

const app = express()
const port = process.env.PORT ?? 3000


console.log(`${process.cwd()}`)

app.listen(port, ()=>{
    console.log(`app listens on port ${port}`)
})