
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'bacon'},
        {name: 'eggs'},
        {name: 'steak'},
        {name: 'butter'},
        {name: 'bread'},
        {name: 'cheddar chees'}
      ]);
    });
};
