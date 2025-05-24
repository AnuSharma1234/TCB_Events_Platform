import jwt from 'jsonwebtoken'

export function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
        res.status(400).json({
            message : 'No token provided'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        req.userId = decoded.userId
        next()
    }catch(error){
        res.status(400).json({
            message : 'Token de bsdk'
        })
    }
}


export function verifyAdmin(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    try{
        const user = jwt.verify(token,  process.env.TOKEN_KEY)

        if(user.role){
            return res.status(400).json({
                message : "Logged in user is not admin"
            })
        }

        req.user = user
        next()
    }catch(error){
        res.status(400).json({
            message : 'Access denied to the protected route'
        })
    }
}
