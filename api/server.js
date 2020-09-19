const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authenticate = require('../auth/authenticate-middleware')
const authRouter = require('../auth/auth-router')

const potluckRouter = require('../potluck/potluck-router')
const userRouter = require('../users/user-router')
const profileRouter = require('../profile/profile-router')

const server = express()
server.use(helmet())
server.use(cors({
    origin:'*',
    credentials: true,
}))

server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/users', userRouter)
server.use('/api/potluck', authenticate, potluckRouter)
server.use('/api/profile', authenticate, profileRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Backend API App for Potluck Planner!</h2>`);
  });
  

module.exports = server