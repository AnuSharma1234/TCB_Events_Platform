import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

export const signUp = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            const error = new Error('Both credentials are required for Sign-Up')
            throw error
        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const error = new Error('User already exists')
            throw error
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = new User({ email, password: hashedPassword })

        await user.save()

        res.status(200).json({
            success: true,
            message: 'User registered succesfully'
        })
    } catch (error) {
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

        const token = jwt.sign(user._id, process.env.TOKEN_KEY, {
            expiresIn: 3600
        })

        res.status(200).json({
            success: true,
            message: 'User logged in succesfully',
            data: {
                token
            }
        })

    } catch (error) {
        res.status(400).json({
            sucesss: true,
            message: 'Login Failed'
        })
        console.log(error)
    }
}


