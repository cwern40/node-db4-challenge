
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Bacon and Eggs'},
        {name: 'Steak'},
        {name: 'Grilled Cheese'}
      ]);
    });
};
