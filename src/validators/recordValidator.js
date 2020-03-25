import Joi from '@hapi/joi';

import validate from '../utils/validate';
import recordRepository from '../repositories/recordRepository';

// Validation schema
const schema = Joi.object({
  game_id: Joi.number().label('GameId').required(),
  user_id: Joi.number().label('UserId').required(),
  points: Joi.number().label('Points').required(),
  winner: Joi.boolean().label('Winner').default(0),
});

/**
 * Validate create/update record request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function recordValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate records existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findRecord(req, res, next) {
  return recordRepository
    .getById(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findRecord, recordValidator };
