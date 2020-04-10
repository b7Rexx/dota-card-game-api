"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = adminAuthenticate;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _jwtAuth = require("../utils/jwtAuth");

var _userRepository = _interopRequireDefault(require("../repositories/userRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware to handle admin authentication.
 * Checks if id has true for isAdmin.
 * Adds user_id to request body.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
function adminAuthenticate(req, res, next) {
  let token = '';
  if (req.header('Authorization')) token = req.header('Authorization');else if (req.header('Token')) token = req.header('Token');else if (req.token) token = req.token;else throw _boom.default.unauthorized('Missing Auth');
  (0, _jwtAuth.verifyJwtToken)(token).then(decoded => {
    req.AuthID = decoded.id;

    _userRepository.default.getById(decoded.id).then(data => {
      const user = JSON.parse(JSON.stringify(data)).model;
      if (user.isAdmin) next();else return next(_boom.default.unauthorized('Not Admin'));
    }).catch(() => {
      return next(_boom.default.unauthorized('Invalid Auth'));
    });
  }).catch(err => {
    return next(_boom.default.unauthorized(err.name));
  });
}
//# sourceMappingURL=adminAuthenticate.js.map