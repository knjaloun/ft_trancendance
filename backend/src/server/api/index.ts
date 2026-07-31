import express from 'express';
import cors from 'cors';

import authRouter from '#auth/route/auth.routing.js';
import emailVerificationRouter from '#emailVeri/route/emailVerification.route.js';
import TwoFaRouter from '#2fa/route/2fa.route.js';

const app = express();

// Behind the nginx reverse proxy the frontend and the API share one origin, so
// no CORS negotiation happens at all. This stays configured for `npm run dev`,
// where vite serves the frontend on another port.
app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  }),
);
app.use(express.json());

const port = process.env.PORT ?? 3000;

app.use('/api', authRouter);
app.use('/api', emailVerificationRouter);
app.use('/api', TwoFaRouter);

app.listen(port, () => {
  console.log(`app listens on port ${port}`);
});
