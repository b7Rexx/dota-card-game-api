"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findHeroType = findHeroType;
exports.heroTypeValidator = heroTypeValidator;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _heroTypeRepository = _interopRequireDefault(require("../repositories/heroTypeRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validation schema
const schema = _joi.default.object({
  name: _joi.default.string().label('Name').max(255).required(),
  key: _joi.default.string().label('Key').min(3).max(16).required()
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
  return (0, _validate.default)(req.body, schema).then(() => next()).catch(err => next(err));
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
  return _heroTypeRepository.default.getById(req.params.id).then(() => next()).catch(err => next(err));
}
//# sourceMappingURL=heroTypeValidator.js.map