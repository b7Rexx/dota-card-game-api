"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;

/**
 * Delete existing entries and seed values for `heroes`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function seed(knex) {
  return knex('heroes').del().then(() => {
    return knex('heroes').insert([{
      name: 'Axe',
      hero_type_id: 1
    }, {
      name: 'Antimage',
      hero_type_id: 2
    }, {
      name: 'Ancient Apparition',
      hero_type_id: 3
    }]);
  });
}
//# sourceMappingURL=03_insert_heroes.js.js.map