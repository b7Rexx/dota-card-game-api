import { hashPass } from '../utils/bcrypt';
/**
 * Delete all existing entries and seed users table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'Admin',
          email: 'admin@dcg.com',
          password: hashPass('admin@123'),
          isAdmin: 1,
          updated_at: new Date(),
        },
        {
          name: 'test',
          email: 'test@dcg.com',
          password: hashPass('test@123'),
          isAdmin: 0,
          updated_at: new Date(),
        },
      ]);
    });
}
