const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = require('express').Router()

const Users = require('../users/user-model')
const {isValid} = require('../users/user-service')

router.post('/register', (req, res) => {
    const credentials = req.body

    if(isValid(credentials)){
        const rounds = process.env.BCRYPT_ROUNDS || 4
        const hash = bcryptjs.hashSync(credentials.password, rounds)
        credentials.password = hash

        Users.add(credentials)
        .then(user => {
            const token = makeJwt(user)
            res.status(201).json({data: user, token})
        })
        //may need to change to res.status(201).json(user)
        .catch(error => {
            res.status(500).json({message: error.message})
        })
    } else {
        res.status(400).json({
            message: "Username and password are required. Authrouter Line28"
        })
    }
})

router.post('/login', (req, res) => {
    const {username, password} = req.body

    if(isValid(req.body)){
        Users.findBy({username: username})
        .then(([user]) => {
            if(user && bcryptjs.compareSync(password, user.password)){
                const token = makeJwt(user)
                res.status(200).json({token})
            } else {
                res.status(401).json({message: 'Invalid credentials AuthRouter Line43'})
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Auth Router line 47'})
        })
    } else {
        res.status(400).json({ message: 'Please Provide Username and Password. AuthRouter Line50'})
    }
})

function makeJwt({ id, username }){
    const payload = {
        username,
        subject: id
    }
    const config = {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
    const options = {
        expiresIn: '8 hours'
    }
    return jwt.sign(payload, config.jwtSecret, options)
}

module.exports = router