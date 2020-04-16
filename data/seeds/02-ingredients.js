
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'oats'},
    { ingredient_name: 'milk'},
    { ingredient_name: 'bread'},
    { ingredient_name: 'ham'},
    { ingredient_name: 'cheese'}
  ]);
};
