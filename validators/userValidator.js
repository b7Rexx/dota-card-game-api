"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUser = findUser;
exports.userValidator = userValidator;
exports.userEditValidator = userEditValidator;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _userRepository = _interopRequireDefault(require("../repositories/userRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validation schema
const schema = _joi.default.object({
  name: _joi.default.string().label('Name').max(255).required(),
  email: _joi.default.string().label('Email').email().max(255).required(),
  password: _joi.default.string().label('Password').min(6).max(255).required()
});

const schemaEdit = _joi.default.object({
  name: _joi.default.string().label('Name').max(255).required(),
  email: _joi.default.string().label('Email').email().max(255).required()
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
  return (0, _validate.default)(req.body, schema).then(() => next()).catch(err => next(err));
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
  return (0, _validate.default)(req.body, schemaEdit).then(() => next()).catch(err => next(err));
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
  return _userRepository.default.getById(req.params.id).then(() => next()).catch(err => next(err));
}
//# sourceMappingURL=userValidator.js.map