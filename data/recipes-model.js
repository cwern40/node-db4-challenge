const db = require('./db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('steps as s')
        .join('ingredients as i', 'i.id', 's.ingredients_id')
        .select('i.ingredient_name', 's.quantity')
        .where({ recipe_id })
}

function getInstructions(recipe_id) {
    return db('steps as s')
        .join('recipes as r', 'r.id', 's.recipe_id')
        .join('ingredients as i', 'i.id', 's.ingredients_id')
        .select('s.step_number','i.ingredient_name','s.quantity', 's.step_comment')
        .where({ recipe_id })
        .orderBy('s.step_number')
}