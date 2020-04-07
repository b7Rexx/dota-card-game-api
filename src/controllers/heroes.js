import HttpStatus from 'http-status-codes';

import heroRepository from '../repositories/heroRepository';
import heroImageRepository from '../repositories/heroImageRepository';

/**
 * Get all heros.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  heroRepository
    .getAll()
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Get a hero by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  heroRepository
    .getById(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Create a new hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  heroRepository
    .create(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}

/**
 * Update a hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  heroRepository
    .update(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Delete a hero.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function remove(req, res, next) {
  heroImageRepository
    .getByWhere({ hero_id: req.params.id })
    .then((result) => {
      if (result.model.length > 0) {
        // remove hero images by user id
        result.model.models.forEach((item) => {
          heroImageRepository.remove(item.id);
        });
      }
    })
    .then(() => {
      heroRepository
        .remove(req.params.id)
        .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
}

/**
 * Get Paginated heroes.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function paginate(req, res, next) {
  heroRepository
    .paginate(req.query.page, req.query.pagesize)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
