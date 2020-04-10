"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJwtToken = getJwtToken;
exports.verifyJwtToken = verifyJwtToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create jwt token.
 *
 * @param {*} id
 */
function getJwtToken(id) {
  return _jsonwebtoken.default.sign({
    id: id
  }, 'ThisIsSecret', {
    expiresIn: '1d'
  });
}
/**
 * Verify jwt token.
 *
 * @param {*} token
 * @returns {Promise}
 */


function verifyJwtToken(token) {
  return new Promise((resolve, reject) => {
    _jsonwebtoken.default.verify(token, 'ThisIsSecret', function (err, decoded) {
      if (err) reject(err);else resolve(decoded);
    });
  });
}
//# sourceMappingURL=jwtAuth.js.map