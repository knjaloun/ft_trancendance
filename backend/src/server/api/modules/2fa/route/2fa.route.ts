import express from 'express'
import { twoFactorAuthController } from '#2fa/controllers/2faVerify.controller.js'

const router = express.Router()

router.post('/2fa/verify', twoFactorAuthController)

export default router