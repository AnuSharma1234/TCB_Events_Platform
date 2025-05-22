import jwt from 'jsonwebtoken'

export function verifyToken(req, res, next) {
    const token = req.headers('Authorization')

    if (!token) {
        return res.status(400).json({
            message: 'Access denied'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        req.id = decoded.id;
        next()
    } catch (error) {
        res.status(400).json({
            message: 'Invalid Token access denied'
        })
    }
    next()
}

export function  verifyAdmin(req,res,next) {
    const token = req.headers('Authorization')

    if(!token){
        return res.status(400).json({
            message : 'Token not found , access denied'
        })
    }

    try{
        const decoded = jwt.verify(token , process.env.TOKEN_KEY)
        if(decoded.role == 'admin'){
            next()
        }else{
            throw new Error('Access Denied')
        }
    }catch(error){
        res.status(400).json({
            message : 'Access Denied'
        })
    }
}
