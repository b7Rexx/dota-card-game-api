"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findHeroImage = findHeroImage;
exports.heroImageValidator = heroImageValidator;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _heroImageRepository = _interopRequireDefault(require("../repositories/heroImageRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validation schema
const schema = _joi.default.object({
  hero_id: _joi.default.number().label('HeroId').required(),
  image: _joi.default.string().label('Image').required(),
  path: _joi.default.string().label('Thumbnail').allow(null).allow(''),
  thumbnail: _joi.default.string().label('Thumbnail').allow(null).allow(''),
  original: _joi.default.string().label('Thumbnail').allow(null).allow('')
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
  return (0, _validate.default)(req.body, schema).then(() => next()).catch(err => next(err));
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
  return _heroImageRepository.default.getById(req.params.id).then(() => next()).catch(err => next(err));
}
//# sourceMappingURL=heroImageValidator.js.map