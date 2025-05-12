import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { secretToken } from "../models/util/SecretToken.js"

import User from "../models/user.model.js"
const authKey  = process.env.AUTH_SECRET_KEY


export const signUp = async (req,res,next) =>{
    const session = mongoose.startSession()
    ;(await session).startTransaction()

    try{
        const {username , email ,password} = req.body

        const existingUser = await User.findOne({email})

        if(existingUser){
            const error = new Error('User already exists')
            error.statusCode = 400
            throw error
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = await User.create([{
            username,
            email,
            password : hashedPassword
        }])

        const token = secretToken(newUser[0]._id)
        ;(await session).commitTransaction()
        ;(await session).endSession()

        res.cookie("token",token , {
            withCredentials : true,
            httpOnly : false
        })

        res.status(200).json({
            success : true,
            message : 'User created succesfully',
            data : {
                token,
                user : newUser[0]
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
