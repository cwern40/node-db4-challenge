
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, ingredients_id: 1, quantity: '4 strips', step_comment: 'cook the bacon', recipe_id: 1},
        {step_number:2, ingredients_id: 2, quantity: '2', step_comment: 'cook the eggs, sunny side up. finished', recipe_id: 1},
        {step_number:1, ingredients_id: 4, quantity: '1/2 cup', step_comment: 'put butter in frying pan over medium heat', recipe_id: 2},
        {step_number:2, ingredients_id: 3, quantity: '1', step_comment: 'put steak in frying pan and cook to medium rare', recipe_id: 2},
        {step_number:1, ingredients_id: 5, quantity: '2 slices', step_comment: 'lay bread on table', recipe_id: 3},
        {step_number:2, ingredients_id: 4, quantity: '1 sliver', step_comment: 'butter both sides of bread', recipe_id: 3},
        {step_number:3, ingredients_id: 6, quantity: '2 slices', step_comment: 'brown buttered bread in the frying pan and add in the cheese.', recipe_id: 3}
      ]);
    });
};
