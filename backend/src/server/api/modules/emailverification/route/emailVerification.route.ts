import express from 'express'
import {EmailVerificationController} from '#emailVeri/controller/emailVerification.controller.js'
const router = express.Router()

router.post('/verify', EmailVerificationController)

export default router