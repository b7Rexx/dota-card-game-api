"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findHero = findHero;
exports.heroValidator = heroValidator;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _heroRepository = _interopRequireDefault(require("../repositories/heroRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validation schema
const schema = _joi.default.object({
  name: _joi.default.string().label('Name').max(255).required(),
  hero_type_id: _joi.default.number().label('HeroTypeId').required()
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
  return (0, _validate.default)(req.body, schema).then(() => next()).catch(err => next(err));
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
  return _heroRepository.default.getById(req.params.id).then(() => next()).catch(err => next(err));
}
//# sourceMappingURL=heroValidator.js.map