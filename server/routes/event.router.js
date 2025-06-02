import { Router } from 'express'
import { verifyToken , verifyAdmin } from '../middlewares/auth.middleware.js'
import { createEvent , deleteEvent , getEventDetails ,closeEvent , updateEvent } from '../controllers/event.controller.js'
import upload from '../utils/multer.js'

const eventRouter = Router()


eventRouter.post('/', verifyToken ,upload.single('image') , verifyAdmin , createEvent )

eventRouter.delete('/:id' , verifyToken , verifyAdmin , deleteEvent)

eventRouter.get('/' ,verifyToken, getEventDetails)

eventRouter.put('/:id' ,verifyToken , verifyAdmin , upload.single('image'),  updateEvent)

eventRouter.put('/:id',verifyToken , verifyAdmin , closeEvent)


export default eventRouter
