import express from 'express'
import {EmailVerificationController} from '#emailVeri/controller/emailVerification.controller.js'
import { refreshJwtTokenController } from '#emailVeri/controller/refreshToken.controller.js'
import { resendEmailController } from '#emailVeri/controller/resendEmail.js'
const router = express.Router()

router.post('/verify', EmailVerificationController)
router.patch('/verify/refresh', refreshJwtTokenController)
router.post('/verify/resend', resendEmailController);

export default router