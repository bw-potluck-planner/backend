exports.seed = function(knex) {
  return knex('profile').insert([
    {
      name: 'Ariadne',
      contact: '1-555-555-5555',
      confirmation: true,
      username: 'ariadne',
      role: 'Guest'
    },
    {
      name: 'Cassandra',
      contact: '1-555-123-4567',
      confirmation: true,
      username: 'cassandra_of_troy',
      role: 'Host'
    },
  ])
}

// tbl.string('name').notNullable()
// tbl.string('contact').notNullable()
// tbl.boolean('confirmation')
// tbl.string('users_id')
// .notNullable()
// .references('id')
// .inTable('users')
// .onUpdate('CASCADE')
// .onDelete('CASCADE')