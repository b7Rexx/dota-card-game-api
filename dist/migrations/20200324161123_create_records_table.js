"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

/**
 * Create records table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function up(knex) {
  return knex.schema.createTable('records', table => {
    table.increments();
    table.integer('game_id').notNull();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users').onUpdate('CASCADE');
    table.integer('points');
    table.string('winner').defaultTo(0);
    table.boolean('status').defaultTo(1);
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull().defaultTo(knex.raw('now()'));
  });
}
/**
 * Drop records table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */


function down(knex) {
  return knex.schema.dropTable('records');
}
//# sourceMappingURL=20200324161123_create_records_table.js.map