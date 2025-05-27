import {Router} from 'express'
import { verifyToken , verifyAdmin } from '../middlewares/auth.middleware.js'
import {getAllRegistrations, registerEvent} from '../controllers/registration.controller.js'

const registerRouter = Router()

registerRouter.post('/', verifyToken ,registerEvent)

registerRouter.get('/',verifyToken , verifyAdmin , getAllRegistrations)

export default registerRouter

