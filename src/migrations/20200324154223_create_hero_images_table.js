/**
 * Create hero_images table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('hero_images', (table) => {
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
export function down(knex) {
  return knex.schema.dropTable('hero_images');
}
