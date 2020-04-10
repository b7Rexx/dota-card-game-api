"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;

var _bcrypt = require("../utils/bcrypt");

/**
 * Delete all existing entries and seed users table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
function seed(knex) {
  return knex('users').del().then(() => {
    return knex('users').insert([{
      name: 'Admin',
      email: 'admin@dcg.com',
      password: (0, _bcrypt.hashPass)('admin@123'),
      isAdmin: 1,
      updated_at: new Date()
    }, {
      name: 'test',
      email: 'test@dcg.com',
      password: (0, _bcrypt.hashPass)('test@123'),
      isAdmin: 0,
      updated_at: new Date()
    }]);
  });
}
//# sourceMappingURL=01_insert_users.js.map