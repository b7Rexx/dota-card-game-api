/**
 * Delete existing entries and seed values for `hero_types`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('hero_types')
    .del()
    .then(() => {
      return knex('hero_types').insert([
        {
          name: 'strength',
        },
        {
          name: 'agility',
        },
        {
          name: 'intelligence',
        },
      ]);
    });
}
