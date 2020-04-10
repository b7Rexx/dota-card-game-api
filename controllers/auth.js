"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _bcrypt = require("../utils/bcrypt");

var _userRepository = _interopRequireDefault(require("../repositories/userRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
function login(req, res, next) {
  _userRepository.default.where({
    email: req.body.email
  }).then(data => {
    const user = JSON.parse(JSON.stringify(data)).model;

    if ((0, _bcrypt.comparePass)(req.body.password, user.password)) {
      return res.status(_httpStatusCodes.default.ACCEPTED).json(_userRepository.default.accessToken(user));
    } else {
      throw _boom.default.unauthorized('invalid password');
    }
  }).catch(err => next(err));
}
//# sourceMappingURL=auth.js.map