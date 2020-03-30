"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

/**
 * Create hero_images table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function up(knex) {
  return knex.schema.createTable('hero_images', table => {
    table.increments();
    table.integer('hero_id').unsigned();
    table.foreign('hero_id').references('id').inTable('heroes').onUpdate('CASCADE');
    table.string('image').notNull();
    table.string('path').notNull();
    table.string('thumbnail');
    table.string('original');
    table.boolean('status').defaultTo(1);
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull().defaultTo(knex.raw('now()'));
  });
}
/**
 * Drop hero_images table.
 *X
 * @param   {object} knex
 * @returns {Promise}
 */


function down(knex) {
  return knex.schema.dropTable('hero_images');
}
//# sourceMappingURL=20200324154223_create_hero_images_table.js.map