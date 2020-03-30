"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;

/**
 * Delete existing entries and seed values for `hero_types`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function seed(knex) {
  return knex('hero_types').del().then(() => {
    return knex('hero_types').insert([{
      name: 'strength',
      key: 'STR'
    }, {
      name: 'agility',
      key: 'AGI'
    }, {
      name: 'intelligence',
      key: 'INT'
    }]);
  });
}
//# sourceMappingURL=02_hero_types.js.map