import express from 'express'
import cors from 'cors'
import connectDB from './db/mongodb.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'

import authRouter from './routes/auth.route.js'

const app = express()

dotenv.config({
    path: '.env'
})

app.use(cors({
    origin: ["http://localhost:5500"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())

app.use('/', authRouter);
app.use('/api/v1/user', userRouter);


app.listen(process.env.PORT, (req, res) => {
    console.log(`App is listening on PORT: ${process.env.PORT}`)
    connectDB()
})

export default app
