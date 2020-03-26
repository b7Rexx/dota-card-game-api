import Joi from '@hapi/joi';

import validate from '../utils/validate';
import heroImageRepository from '../repositories/heroImageRepository';

// Validation schema
const schema = Joi.object({
  hero_id: Joi.number().label('HeroId').required(),
  image: Joi.string().label('Image').required(),
  path: Joi.string().label('Thumbnail').allow(null).allow(''),
  thumbnail: Joi.string().label('Thumbnail').allow(null).allow(''),
  original: Joi.string().label('Thumbnail').allow(null).allow(''),
});

/**
 * Validate create/update heroImage request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function heroImageValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate heroImages existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findHeroImage(req, res, next) {
  return heroImageRepository
    .getById(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findHeroImage, heroImageValidator };
