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

function getInstructions(id) {
    return db('steps as s')
        .join('recipes as r', 'r.id', 's.recipe_id')
        .select('s.step_number', 's.step_comment')
        .orderBy('s.step_number')
}