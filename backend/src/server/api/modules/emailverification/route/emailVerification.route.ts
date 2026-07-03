import express from 'express'
import {EmailVerificationController} from '#emailVeri/controller/emailVerification.controller.js'
import { refreshJwtTokenController } from '#emailVeri/controller/refreshToken.controller.js'
const router = express.Router()

router.post('/verify', EmailVerificationController)
router.patch('/verify/refresh', refreshJwtTokenController)

export default router