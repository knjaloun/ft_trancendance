import express from 'express'
import {loginController} from '#auth/controllers/login.controller.js'
import { registerController } from '#auth/controllers/register.controller.js'
import { userAlreadyAuthenticated } from '#auth/middlewares/userAlreadyAuthenticated.js'

const router = express.Router()

router.post('/login',userAlreadyAuthenticated, loginController)
router.post('/register', registerController)

export default router