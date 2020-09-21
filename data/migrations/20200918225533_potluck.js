exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments()

      tbl.string('username', 128)
      .notNullable()
      .unique()
      .index()

      tbl.string('password')
      .notNullable()

      tbl.string('role')
  })

  .createTable('potluck', tbl => {
      tbl.increments()

      tbl.string('name').notNullable()
      tbl.string('date').notNullable()
      tbl.text('location').notNullable()
      tbl.string('dish').notNullable()
      tbl.text('description')
      tbl.boolean('allergyalert')
      tbl.string('email')
  })

  .createTable('profile', tbl => {
    tbl.increments()
      tbl.string('name').notNullable()
      tbl.string('contact').notNullable()
      tbl.boolean('confirmation')
      tbl.string('username')
      tbl.string('role')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('profile')
  .dropTableIfExists('potluck')
  .dropTableIfExists('users')
};
