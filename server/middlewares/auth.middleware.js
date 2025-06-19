import jwt from 'jsonwebtoken'

export function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    try{
        if(!token){
            throw new Error("Token not provided")
        }

        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        req.userId = decoded.userId

        next()
    }catch(error){
        res.status(400).json({
            success : false,
            message : 'Token not provided: External'
        })
    }
}


export function verifyAdmin(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    try{
        const user = jwt.verify(token,  process.env.TOKEN_KEY)

        if(user.isAdmin){
            req.user = user
            next()
        }else{
            res.status(400).json({
                success : false,
                message : "Access denied"
            })
        }
   }catch(error){
        console.log(error.message)
        res.status(400).json({
            message : 'Access denied to the protected route'
        })
    }
}
