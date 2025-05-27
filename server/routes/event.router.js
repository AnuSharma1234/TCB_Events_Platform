import { Router } from 'express'
import { verifyToken , verifyAdmin } from '../middlewares/auth.middleware.js'
import { createEvent , deleteEvent , getEventDetails , updateEvent } from '../controllers/event.controller.js'

const eventRouter = Router()

eventRouter.post('/', verifyToken , verifyAdmin , createEvent )

eventRouter.delete('/:id' , verifyToken , verifyAdmin , deleteEvent)

eventRouter.get('/' ,verifyToken, getEventDetails)

eventRouter.put('/:id' ,verifyToken , verifyAdmin , updateEvent)



export default eventRouter
