
exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
      tbl.increments();
      tbl.text('name', 128).unique().notNullable();
      tbl.decimal('avgWeightOz').notNullable();
      tbl.boolean('delicious');
  })
};

//knex migrate:latest

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};

//knex migrate:rollback
// Make sure to rollback when changing table
// Do not input data until table inputs are done