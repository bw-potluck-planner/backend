exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: 'ariadne',
      password: 'pass',
      role: 'guest'
    },
    {
      username: 'cassandra_of_troy',
      password: 'pass',
      role: 'organizer'
    }
  ])
}

// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };
