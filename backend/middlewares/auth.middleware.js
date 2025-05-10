import jwt, { decode } from 'jsonwebtoken'
import User from '../models/user.model.js'

const _SecretToken = process.env.AUTH_SECRET_KEY
const _TokenExpiryTime = '24h'

function authorize(roles = []){

    if(!Array.isArray(roles))
        roles = [roles]

    return async (req, res ,next) => {
    try{
        let token;
        
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1]
        }

        if(!token){
            return res.json({
                message : 'Unauthorized , invalid token'
            })
        }

        const decoded = jwt.verify(token , _SecretToken)

        const user = await User.findById(decoded._id)

        if(!user){
            res.status(400).json({
                message : 'Unauthorized , user does not exist !!'
            })
        }

        const userRole = user.role

        if(!roles.includes(userRole)){
            res.status(400).json({
                message : 'Restricted access'
            })
        }

        req.user = user
        next()

    }catch(error){
        console.log(`Server error occured in Authorization`)
        return res.status(403).json({
            message : 'Unauthorized',
            error : error.message
        })
    }
}
}

export default authorize