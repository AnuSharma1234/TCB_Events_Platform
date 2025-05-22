import express from 'express'
import connectDb from './db/connect.db.js'
import authRouter from './routes/auth.router.js'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import eventRouter from './routes/event.router.js'

const app = express()

configDotenv({
    path: '.env'
})

app.use(cors())
app.use(express.json())

app.use('/auth', authRouter) // /signin and /signup
app.use('/admin',eventRouter)


app.listen(process.env.PORT, (req, res) => {
    console.log(`Server started on PORT : ${process.env.PORT}`)
    connectDb()
})
