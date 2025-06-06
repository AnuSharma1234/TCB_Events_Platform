import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signUp = async (req, res) => {
    try {
        const { name,  email, password } = req.body

        if (!email || !password || !name) {
            const error = new Error('Both credentials are required for Sign-Up')
            throw error
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const error = new Error('User already exists with this email ,try logging in')
            res.status(200).json({
                success : false,
                message : 'User already exists with this email , try logging in'
            })
            throw error
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = User.create({ name ,email, password: hashedPassword , isAdmin : false})

        const token = jwt.sign(
            user.toJSON(),
            process.env.TOKEN_KEY,
            {expiresIn : '30d'})

        res.status(200).json({
        success : true,
        token,
        user : {
                id : user._id , name : user.name , email : user.email , role : user.isAdmin 
        }
        })

    }catch (error) {
        res.status(400).json({
            success: false,
            error: 'Sign-up Failed'
        })
        console.log(error)
    }
}


export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            const error = new Error('Both credentials are required for Sign-In')
            error.statusCode = 400
            throw error
        }

        const user = await User.findOne({ email })

        if (!user) {
            const error = new Error('User does not exists !')
            error.statusCode = 400
            throw error
        }

        const isPassValid = await bcrypt.compare(password, user.password)

        if (!isPassValid) {
            const error = new Error('Invalid Password')
            error.statusCode = 400
            throw error
        }

        const token = jwt.sign(user.toJSON(),process.env.TOKEN_KEY, {
            expiresIn : '30d'
        })

        res.status(200).json({
            success : true,
            token,
            message : "Logged in Succesfully",
            isAdmin : user.isAdmin,
            user : {
                id : user._id , name : user.name , email : user.email , isAdmin : user.isAdmin , isRegisterdForLatesEvent : user.isRegisterdForLatesEvent
            }
        })

    }catch(error) {
        res.status(error.statusCode).json({
            success : false,
            error : {
                message : error.message || "Internal server error"
            }
       })
        console.log(error)
    }
}
