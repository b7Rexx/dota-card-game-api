import HttpStatus from 'http-status-codes';

import heroImageRepository from '../repositories/heroImageRepository';

/**
 * Get all heros.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  heroImageRepository
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
  heroImageRepository
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
  heroImageRepository
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
  heroImageRepository
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
    .removeImagebyId(req.params.id)
    .then((data) => {
      res.status(HttpStatus.NO_CONTENT).json({ data });
    })
    .catch((err) => next(err));
}
