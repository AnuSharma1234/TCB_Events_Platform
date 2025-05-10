import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from "../models/user.model.js"
const authKey  = process.env.AUTH_SECRET_KEY


export const signUp = async (req,res,next) =>{
    const session = mongoose.startSession()
    ;(await session).startTransaction()

    try{
        const {name , email ,password} = req.body

        const existingUser = await User.findOne({email})

        if(existingUser){
            const error = new Error('User already exists')
            error.statusCode = 400
            throw error
        }

        const salt = await bcrypt.getSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUsers = await User.create([{
            name,
            email,
            password : hashedPassword
        }])

        const token = jwt.sign({ userId : newUsers[0]._id }, authKey , {expiresIn : '30d'})
        ;(await session).commitTransaction()
        ;(await session).endSession()

        res.status(200).json({
            success : true,
            message : 'User created succesfully',
            data : {
                token,
                user : newUsers[0]
            }
        })
        
    }catch(error){
        ;(await session).abortTransaction()
        ;(await session).endSession()
        next(error)
    }
}


export const signIn = async (req,res,next) =>{
    try{
        const {email , password} = req.body;

        const user = await User.findOne({email})
        
        if(!user){
            const error = new Error('User does not exist')
            error.statusCode = 401
            throw error
        }

        const isPassValid = await bcrypt.compare(password , user.password)

        if(!isPassValid){
            const error = new Error('Invalid Password')
            error.statusCode = 400 
            throw error
        }

        const token = jwt.sign({userId : user._id}, authKey , {expiresIn : '24h'})

        res.status(200).json({
            success : true,
            message : 'User signed in succesfully',
            data : {
                token,
                user
            }
        })

    }catch(error){
        next(error)
    }
}
