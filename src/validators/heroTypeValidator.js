import Joi from '@hapi/joi';

import validate from '../utils/validate';
import heroTypeRepository from '../repositories/heroTypeRepository';

// Validation schema
const schema = Joi.object({
  name: Joi.string().label('Name').max(255).required(),
  key: Joi.string().label('Key').min(3).max(16).required(),
});

/**
 * Validate create/update heroType request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function heroTypeValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate heroTypes existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findHeroType(req, res, next) {
  return heroTypeRepository
    .getById(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findHeroType, heroTypeValidator };
