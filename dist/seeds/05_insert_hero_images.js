"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seed = seed;

/**
 * Delete existing entries and seed values for `hero_images`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function seed(knex) {
  return knex('hero_images').del().then(() => {
    return knex('hero_images').insert([{
      hero_id: 1,
      image: 'image_0f60e29d-7dd7-449a-9e21-316737c2c2f0.png',
      path: 'files/',
      original: 'original_0f60e29d-7dd7-449a-9e21-316737c2c2f0.png',
      thumbnail: 'thumbnail_0f60e29d-7dd7-449a-9e21-316737c2c2f0.png'
    }, {
      hero_id: 2,
      image: 'image_0f60e29d-7dd7-449a-9e21-316737c2c2f0.png',
      path: 'files/',
      original: 'original_0f60e29d-7dd7-449a-9e21-316737c2c2f0.png',
      thumbnail: 'thumbnail_0f60e29d-7dd7-449a-9e21-316737c2c2f0.png'
    }, {
      hero_id: 3,
      image: 'image_0f60e29d-7dd7-449a-9e21-316737c2c2f0.png',
      path: 'files/',
      original: 'original_0f60e29d-7dd7-449a-9e21-316737c2c2f0.png',
      thumbnail: 'thumbnail_0f60e29d-7dd7-449a-9e21-316737c2c2f0.png'
    }]);
  });
}
//# sourceMappingURL=05_insert_hero_images.js.map