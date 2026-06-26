import express from 'express'

import authRouter from '#auth/route/auth.routing.js'

const app = express()
app.use(express.json());
const port = process.env.PORT ?? 3000

app.use('/api/auth', authRouter)

app.listen(port, ()=>{
    console.log(`app listens on port ${port}`)
})