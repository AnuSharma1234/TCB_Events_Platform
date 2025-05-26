import {Router} from 'express'
import { verifyToken , verifyAdmin } from '../middlewares/auth.middleware.js'
import {registerEvent} from '../controllers/registration.controller.js'

const registerRouter = Router()

registerRouter.post('/', verifyToken ,registerEvent)

export default registerRouter

