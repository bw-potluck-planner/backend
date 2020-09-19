const router = require('express').Router()

const Users = require('./user-model')
const restricted = require('../auth/authenticate-middleware')

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => res.send(err))
})

router.get('/:id', restricted, (req, res) => {
    const { id } = req.params
    Users.findById(id)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({ error: 'Error retrieving Profile Information. Line 21 Profile Router'})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    Users.remove(id)
    .then(count => {
        if(count > 0){
            res.status(200).json({ message: "The user has been deleted." })
        }
    })
    .catch(error => {
        res.status(500).json({ error: "The user could not be deleted."})
    })
})

module.exports = router