
exports.seed = function(knex) {
  return knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredients_id: 1},
    { recipe_id: 1, ingredients_id: 2},
    { recipe_id: 2, ingredients_id: 3},
    { recipe_id: 2, ingredients_id: 4},
    { recipe_id: 2, ingredients_id: 5}
  ])
};
