import express from 'express'
import cors from 'cors';

import authRouter from '#auth/route/auth.routing.js'
import emailVerificationRouter from '#emailVeri/route/emailVerification.route.js'
import TwoFaRouter from '#2fa/route/2fa.route.js'
import session from 'express-session'
import {RedisStore} from 'connect-redis'
import { session_redis_connection } from '#infra/redis/redis.js';

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
}));
app.use(express.json());

const redis_store = new RedisStore({
  client: session_redis_connection
})
app.use(session({
  store: redis_store,
  secret: String(process.env.SESSION_SECRET),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true
  }
}));

const port = process.env.PORT ?? 3000

app.use('/api', authRouter)
app.use('/api', emailVerificationRouter)
app.use('/api', TwoFaRouter);

app.listen(port, () => {
  console.log(`app listens on port ${port}`)
})