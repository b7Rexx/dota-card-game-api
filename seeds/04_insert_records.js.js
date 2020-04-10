"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;

var _uuid = require("uuid");

/**
 * Delete existing entries and seed values for `records`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function seed(knex) {
  return knex('records').del().then(() => {
    return knex('records').insert([{
      game_id: (0, _uuid.v4)(),
      user_id: 2,
      points: 32,
      winner: 1
    }, {
      game_id: (0, _uuid.v4)(),
      user_id: 2,
      points: 12,
      winner: 0
    }]);
  });
}
//# sourceMappingURL=04_insert_records.js.js.map