/**
 * Create hero_types table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('hero_types', (table) => {
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
export function down(knex) {
  return knex.schema.dropTable('hero_types');
}
