import express from 'express'
import connectDb from './db/connect.db.js'
import authRouter from './routes/auth.router.js'
import protectedRouter from './routes/protected.router.js'
import cors from 'cors'
import { configDotenv } from 'dotenv'

const app = express()

configDotenv({
    path: '.env'
})

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use('/auth', authRouter)
app.use('/protected', protectedRouter)


app.listen(process.env.PORT, (req, res) => {
    console.log(`Server started on PORT : ${process.env.PORT}`)
    connectDb()
})
