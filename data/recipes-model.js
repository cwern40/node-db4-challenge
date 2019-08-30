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
    return db(steps as )
}