import { Router } from 'express'
import verifyToken from '../middlewares/auth.middleware.js'

const protectedRouter = Router()

protectedRouter.get('/createEvent', verifyToken, )

export default protectedRouter
