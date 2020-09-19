const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.Authorization
    const secret = process.env.JWT_SECRET || 'secret'

    if(token){
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
                res.status(401).json({ message: 'Token Error, middleware Line 10'})
            } else {
                req.jwt = decodedToken
                next()
            }
        })
    } else {
        res.status(401).json({ message: 'Token Error, middleware line 17'})
    }
}