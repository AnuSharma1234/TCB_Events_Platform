import { Router } from 'express'
import {verifyToken , verifyAdmin} from '../middlewares/auth.middleware.js'
import {createEvent , deleteEvent} from '../controllers/event.controller.js'

const eventRouter = Router()

eventRouter.post('/', verifyToken , verifyAdmin, createEvent )
eventRouter.delete('/:id' , verifyToken , verifyAdmin , deleteEvent)



export default eventRouter
