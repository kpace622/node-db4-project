
exports.up = function(knex) {
  return (
    knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128).notNullable().unique()
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128).notNullable().unique()
        })
        .createTable('recipe_instructions', tbl => {
            tbl.increments();
            tbl.string('instructions', 256).notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id')
            tbl.integer('ingredient_quantity')
                .unsigned()
                .notNullable()
                .references('ingredients.id')
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id')
            tbl.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('ingredients.id')
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
