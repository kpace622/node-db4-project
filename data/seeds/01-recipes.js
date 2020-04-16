
exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe_name: 'oatmeal'},
    { recipe_name: 'ham and cheese'}
  ]);
};
