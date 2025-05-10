import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getProfile , updateStatus  } from "../controllers/user.controller.js";

const userRouter = Router()

const roles = ['admin','user']

userRouter.get('/profile',authorize(roles),getProfile)

userRouter.put('/status',authorize(roles[0]),updateStatus)


export default userRouter