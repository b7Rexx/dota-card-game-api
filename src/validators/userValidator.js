import Joi from '@hapi/joi';

import validate from '../utils/validate';
import userRepository from '../repositories/userRepository';

// Validation schema
const schema = Joi.object({
  name: Joi.string().label('Name').max(255).required(),
  email: Joi.string().label('Email').email().max(255).required(),
  password: Joi.string().label('Password').min(6).max(255).required(),
});

const schemaEdit = Joi.object({
  name: Joi.string().label('Name').max(255).required(),
  email: Joi.string().label('Email').email().max(255).required(),
});

/**
 * Validate create user request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function userValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate update user request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function userEditValidator(req, res, next) {
  return validate(req.body, schemaEdit)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate users existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findUser(req, res, next) {
  return userRepository
    .getById(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findUser, userValidator, userEditValidator };
