"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

/**
 * Create hero_types table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function up(knex) {
  return knex.schema.createTable('hero_types', table => {
    table.increments();
    table.string('name').notNull();
    table.string('key').unique().notNull();
    table.boolean('status').defaultTo(1);
  });
}
/**
 * Drop hero_types table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */


function down(knex) {
  return knex.schema.dropTable('hero_types');
}
//# sourceMappingURL=20200324152314_create_hero_types_table.js.map