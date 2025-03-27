

import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'


const usersController = new UsersController()

const router = Router()

router.all('/login', (req, res) => usersController.login(req, res))
router.all('/register', (req, res) => usersController.register(req, res))


export default router