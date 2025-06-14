import { Router } from 'express'
import { verifyToken , verifyAdmin } from '../middlewares/auth.middleware.js'
import { createEvent , deleteEvent , getEventDetails ,closeEvent , updateEvent } from '../controllers/event.controller.js'
import { uploadImage } from '../utils/multer.js'
import { stopEventRegistratons } from '../controllers/event.controller.js'


const eventRouter = Router()

eventRouter.post('/', verifyToken , verifyAdmin ,uploadImage ,createEvent )

eventRouter.delete('/:id' , verifyToken , verifyAdmin , deleteEvent)

eventRouter.get('/:id' ,verifyToken, getEventDetails)

eventRouter.put('/:id' ,verifyToken , verifyAdmin , uploadImage ,  updateEvent)

eventRouter.put('/:id',verifyToken , verifyAdmin , closeEvent)

eventRouter.put('/:id',verifyToken , verifyAdmin, stopEventRegistratons)

export default eventRouter
