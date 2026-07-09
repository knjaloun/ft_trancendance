import express from 'express'
import cors from 'cors';

import authRouter from '#auth/route/auth.routing.js'
import emailVerificationRouter from '#emailVeri/route/emailVerification.route.js'

const app = express()


app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());
const port = process.env.PORT ?? 3000

app.use('/api', authRouter)
app.use('/api', emailVerificationRouter)

app.listen(port, ()=>{
    console.log(`app listens on port ${port}`)
})