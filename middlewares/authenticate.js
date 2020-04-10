"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authenticate;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _jwtAuth = require("../utils/jwtAuth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware to handle authentication.
 * Adds user_id to request body.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
function authenticate(req, res, next) {
  let token = '';
  if (req.header('Authorization')) token = req.header('Authorization');else if (req.header('Token')) token = req.header('Token');else if (req.token) token = req.token;else throw _boom.default.unauthorized('Missing Auth');
  (0, _jwtAuth.verifyJwtToken)(token).then(decoded => {
    req.AuthID = decoded.id; // req.body.user_id = decoded.id;

    next();
  }).catch(err => {
    return next(_boom.default.unauthorized(err.name));
  });
}
//# sourceMappingURL=authenticate.js.map