const router = require('express').Router()

const Potluck = require('./potluck-model')
const restricted = require('../auth/authenticate-middleware')

router.get('/', restricted, (req, res) => {
    Potluck.get()
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => res.send(error))
})

router.get('/:id', restricted, (req, res) => {
    const { id } = req.params
    Potluck.getById(id)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({ error: 'Error retrieving Potluck Information. Line 21 Potluck Router'})
    })
})

router.post('/', restricted, (req, res) => {
    const newPotluck = req.body
    Potluck.insert(newPotluck)
    .then(value => {
        res.status(201).json(value)
    })
    .catch(error => {
        res.status(500).json({ error: 'Error posting potluck. Line 32 Potluck Router.'})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    let changes = req.body
    Potluck.update(id, changes)
    .then(value => {
        res.status(200).json(value)
    })
    .catch(error => {
        res.status(500).json({ error: 'Error changing Potluck. Line 44 Potluck Router.'})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Potluck.remove(id)
    .then(count => {
        if(count > 0){
            res.status(200).json({ message: "Potluck has been deleted."})
        }
    })
    .catch(error => {
        res.status(500).json({ error: "Potluck could not be deleted. Line 57 Potluck Router."})
    })
})

module.exports = router;