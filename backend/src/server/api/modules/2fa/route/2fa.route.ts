import express from 'express'
import { twoFactorAuthController } from '#2fa/controllers/2faVerify.controller.js'
import { twoFactorAuthRefreshController } from '#2fa/controllers/2faRefresh.controller.js'
import { TwoFactorAuthResendController } from '#2fa/controllers/2faResend.controller.js'

const router = express.Router()

router.post('/2fa/verify', twoFactorAuthController)
router.post('/2fa/refresh', twoFactorAuthRefreshController);
router.post('/2fa/resend', TwoFactorAuthResendController)

export default router