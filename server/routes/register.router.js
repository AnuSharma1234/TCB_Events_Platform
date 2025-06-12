import {Router} from 'express'
import { verifyToken , verifyAdmin } from '../middlewares/auth.middleware.js'
import {deleteAllRegistrations, deleteRegistration, getAllRegistrations, registerEvent} from '../controllers/registration.controller.js'

const registerRouter = Router()

registerRouter.post('/', verifyToken ,registerEvent)

registerRouter.get('/', verifyToken, verifyAdmin , getAllRegistrations)

registerRouter.delete('/', verifyToken , verifyAdmin , deleteAllRegistrations)

registerRouter.delete('/:id',verifyToken , verifyAdmin , deleteRegistration)

export default registerRouter

