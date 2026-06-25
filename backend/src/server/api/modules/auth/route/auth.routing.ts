import express from 'express'
import {loginController} from '#auth/controllers/login.controller.js'
import { registerController } from '#auth/controllers/register.controller.js'

const router = express.Router()

router.post('/login', loginController)
router.post('/register', registerController)

export default router