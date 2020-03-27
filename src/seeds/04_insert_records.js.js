import { v4 as uuidv4 } from 'uuid';

/**
 * Delete existing entries and seed values for `records`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('records')
    .del()
    .then(() => {
      return knex('records').insert([
        {
          game_id: uuidv4(),
          user_id: 2,
          points: 32,
          winner: 1,
        },
        {
          game_id: uuidv4(),
          user_id: 2,
          points: 12,
          winner: 0,
        },
      ]);
    });
}
