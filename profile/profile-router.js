const router = require('express').Router()

const Profile = require('./profile-model')
const restricted = require('../auth/authenticate-middleware')

router.get('/', restricted, (req, res) => {
    Profile.get()
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => res.send(error))
})

router.get('/:id', restricted, (req, res) => {
    const { id } = req.params
    Profile.getById(id)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({ error: 'Error retrieving Profile Information. Line 21 Profile Router'})
    })
})

router.post('/', restricted, (req, res) => {
    const newProfile = req.body
    Profile.insert(newProfile)
    .then(value => {
        res.status(201).json(value)
    })
    .catch(error => {
        res.status(500).json({ error: 'Error posting Profile. Line 32 Profile Router.'})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    let changes = req.body
    Profile.update(id, changes)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({ error: 'Error changing Profile. Line 44 Profile Router.'})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Profile.remove(id)
    .then(count => {
        if(count > 0){
            res.status(200).json({ message: "Profile has been deleted."})
        }
    })
    .catch(error => {
        res.status(500).json({ error: "Profile could not be deleted. Line 57 Profile Router."})
    })
})

module.exports = router;