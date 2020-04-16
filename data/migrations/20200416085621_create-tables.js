
exports.up = function(knex) {
  return (
    knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128).unique()
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128).unique()
        })
        .createTable('recipe_instructions', tbl => {
            tbl.increments();
            tbl.string('instructions', 256)
            tbl.integer('recipe_id')
                .unsigned()
                .references('recipes.id')
                .onDelete('SET NULL')
                .onUpdate('SET NULL');
            tbl.integer('ingredient_quantity')
                .unsigned()
                .references('ingredients.id')
                .onDelete('SET NULL')
                .onUpdate('SET NULL');
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .references('recipes.id')
                .onDelete('SET NULL')
                .onUpdate('SET NULL');
            tbl.integer('ingredients_id')
                .unsigned()
                .references('ingredients.id')
                .onDelete('SET NULL')
                .onUpdate('SET NULL');
        })
  );
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('recipe_instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
