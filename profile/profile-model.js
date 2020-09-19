const db = require('../data/dbConfig')

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
}

function get(){
    return db('profile')
}

function getById(id){
    return db('profile')
    .where({ id })
    .first()
}

function insert(profile){
    return db('profile')
    .insert(profile)
    .then(ids => {
        return getById(ids[0])
    })
}

function update(id, changes){
    return db('profile')
    .where({ id })
    .update(changes)
}

function remove(id) {
    return db('profile')
    .where('id', id)
    .del()
}