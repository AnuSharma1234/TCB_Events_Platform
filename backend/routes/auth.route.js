import { Router } from "express"
import { signUp, signIn } from "../controllers/auth.controller.js"
import authorize from "../middlewares/auth.middleware.js"

const authRouter = Router()

authRouter.post('/signup', signUp)

authRouter.post('/signin', signIn)

authRouter.post('/', authorize)


export default authRouter


