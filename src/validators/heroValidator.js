import Joi from '@hapi/joi';

import validate from '../utils/validate';
import heroRepository from '../repositories/heroRepository';

// Validation schema
const schema = Joi.object({
  name: Joi.string().label('Name').max(90).required(),
});

/**
 * Validate create/update hero request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function heroValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate heros existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findHero(req, res, next) {
  return heroRepository
    .getById(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findHero, heroValidator };
