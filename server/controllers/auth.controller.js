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
            throw error
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: 'User does not exist' })
        }

        const isPassValid = await bcrypt.compare(password, user.password)

        if (!isPassValid) {
            return res.status(400).json({
                message: 'Password is invalid'
            })
        }

        const token = jwt.sign(user.toJSON(),process.env.TOKEN_KEY, {
            expiresIn : '30d'
        })

        res.status(200).json({
            token,
            user : {
                id : user._id , name : user.name , email : user.email , role : user.role
            }
        })

    }catch(error) {
        res.status(400).json({
            sucesss: false,
            message: 'Login Failed'
        })
        console.log(error)
    }
}
