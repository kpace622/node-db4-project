const db = require('../data/db-config');

function find() {
    return db('recipes')
}

function getRecipes() {
    return db('recipes')
    .join('recipes_ingredients as r', 'r.recipe_id', 'recipes.id')
    .join('ingredients as i', 'r.ingredients_id', 'i.id')
    .join('recipe_instructions as ri', 'recipes.id', 'ri.recipe_id')
    .select('recipes.id', 'i.ingredient_name', 'ri.instructions', 'ri.ingredient_quantity')
}

function getShoppingList(id) {
    return db('recipes')
    .join('recipes_ingredients as r', 'r.recipe_id', 'recipes.id')
    .join('ingredients as i', 'r.ingredients_id', 'i.id')
    .select('i.ingredient_name')
    .where({recipe_id: id})
}

function getInstructions(id) {
    return db('recipes as r')
    .join('recipe_instructions as ri', 'r.id', 'ri.recipe_id')
    .select('ri.instructions')
    .where({recipe_id: id})
}

module.exports = {
    find,
    getRecipes,
    getShoppingList,
    getInstructions
} 