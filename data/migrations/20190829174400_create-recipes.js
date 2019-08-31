
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128).notNullable().unique();
    })
    .createTable('steps', tbl => {
        tbl.decimal('step_number').notNullable();
        tbl.integer('ingredients_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('quantity', 128);
        tbl.string('step_comment').notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.primary(['step_number','recipe_id'])
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
};
