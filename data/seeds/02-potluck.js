exports.seed = function(knex) {
  return knex('potluck').insert([
    {
      name: 'Wedding Party',
      date: 'July 4th',
      location: 'Isle of Naxos',
      dish: 'Cake',
      description: 'Delicious cake',
      allergyalert: false,
      email: 'ariadne@ariadne.com'
    },
    {
      name: 'Coronation Ceremony',
      date: 'September 5th',
      location: 'Troy',
      dish: 'Wine and Grapes',
      description: 'All you can drink',
      allergyalert: false,
      email: null
    }
  ])
}