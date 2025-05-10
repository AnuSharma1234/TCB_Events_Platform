import express from 'express'
import cors from 'cors'
import connectDB from './db/mongodb.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'

import authRouter from './routes/auth.route.js'

const app = express()

dotenv.config({
    path : '.env'
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))
app.use(cookieParser)

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);


app.get('/' , (req,res)=>{
    res.send(`Hello ,World`)
})

app.listen(process.env.PORT , (req,res)=>{
    console.log(`App is listening on PORT: ${process.env.PORT}`)
    connectDB()
})

export default app