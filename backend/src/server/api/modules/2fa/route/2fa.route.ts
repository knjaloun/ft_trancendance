import express from 'express'
import { twoFactorAuthController } from '#2fa/controllers/2faVerify.controller.js'
import { twoFactorAuthRefreshController } from '#2fa/controllers/2faRefresh.controller.js'
import { TwoFactorAuthResendController } from '#2fa/controllers/2faResend.controller.js'
import session from 'express-session'
import {RedisStore} from 'connect-redis'
import { session_redis_connection } from '#infra/redis/redis.js';

const router = express.Router();

const redis_store = new RedisStore({
  client: session_redis_connection
})


router.use(session({
  store: redis_store,
  secret: String(process.env.SESSION_SECRET),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true
  }
}));
router.post('/2fa/verify', twoFactorAuthController);
router.post('/2fa/refresh', twoFactorAuthRefreshController);
router.post('/2fa/resend', TwoFactorAuthResendController);

export default router