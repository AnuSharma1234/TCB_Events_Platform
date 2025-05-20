import jwt from 'jsonwebtoken'

export default function verifyToken(req, res, next) {
    const token = req.headers('Authorization')

    if (!token) {
        return res.status(400).json({
            message: 'Access denied'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        req.userId = decoded.userId;
        next()
    } catch (error) {
        res.status(400).json({
            message: 'Invalid Token access denied'
        })
    }

}

