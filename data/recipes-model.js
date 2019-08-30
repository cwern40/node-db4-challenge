const db = require('./db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('steps as s')
        .join('ingredients as i', 'i.id', 's.ingredients_id')
        .select('i.ingredient_name', 's.quantity')
        .where(id = 's.recipe_id')
}