"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

/**
 * Create heroes table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function up(knex) {
  return knex.schema.createTable('heroes', table => {
    table.increments();
    table.string('name').notNull();
    table.integer('hero_type_id').unsigned();
    table.foreign('hero_type_id').references('id').inTable('hero_types').onUpdate('CASCADE');
    table.boolean('status').defaultTo(1);
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull().defaultTo(knex.raw('now()'));
  });
}
/**
 * Drop heroes table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */


function down(knex) {
  return knex.schema.dropTable('heroes');
}
//# sourceMappingURL=20200324152453_create_heroes_table.js.map