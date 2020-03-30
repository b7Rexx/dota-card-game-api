"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authValidator = authValidator;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validation schema
const schema = _joi.default.object({
  email: _joi.default.string().email().label('Email').required(),
  password: _joi.default.string().label('Password').required()
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
  return (0, _validate.default)(req.body, schema).then(() => next()).catch(err => next(err));
}
//# sourceMappingURL=authValidator.js.map