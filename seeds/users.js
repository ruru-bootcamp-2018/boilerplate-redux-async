
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Rebecca', hash: 'Stuff'},
        {id: 2, username: 'Hayden', hash: 'OtherStuff'}
      ]);
    });
};
