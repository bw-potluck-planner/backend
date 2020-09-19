exports.seed = function(knex) {
  return knex('profile').insert([
    {
      name: 'Ariadne',
      contact: '1-555-555-5555',
      confirmation: true,
      users_id: 1,
    },
    {
      name: 'Cassandra',
      contact: '1-555-123-4567',
      confirmation: true,
      users_id: 2,
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