
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'bacon'},
        {ingredient_name: 'eggs'},
        {ingredient_name: 'steak'},
        {ingredient_name: 'butter'},
        {ingredient_name: 'bread'},
        {ingredient_name: 'cheddar chees'}
      ]);
    });
};
