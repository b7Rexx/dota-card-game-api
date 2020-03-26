import Joi from '@hapi/joi';

import validate from '../utils/validate';

// Validation schema
const schema = Joi.object({
  email: Joi.string().email().label('Email').required(),
  password: Joi.string().label('Password').required(),
});

/**
 * Validate login request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function authValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

export { authValidator };
