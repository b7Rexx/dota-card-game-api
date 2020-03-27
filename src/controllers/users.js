import HttpStatus from 'http-status-codes';

import userRepository from '../repositories/userRepository';
import { hashPass } from '../utils/bcrypt';

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  userRepository
    .getAll()
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Get a user by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  userRepository
    .getById(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  req.body.password = hashPass(req.body.password);
  userRepository
    .create(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}

/**
 * Update a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  req.body.password = hashPass(req.body.password);
  userRepository
    .update(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Delete a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function remove(req, res, next) {
  userRepository
    .remove(req.params.id)
    .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch((err) => next(err));
}

/**
 * Get Paginated users.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function paginate(req, res, next) {
  userRepository
    .paginate(req.query.page, req.query.pagesize)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
