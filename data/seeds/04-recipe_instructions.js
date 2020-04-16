
exports.seed = function(knex) {
  return knex('recipe_instructions').insert([
    { instructions: 'combine milk and oats', recipe_id: 1, ingredient_quantity: 2 },
    { instructions: 'place ham and cheese on bread', recipe_id: 2, ingredient_quantity: 2 }
  ])
};
