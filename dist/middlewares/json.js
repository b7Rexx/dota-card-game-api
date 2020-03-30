"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = json;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware to handle empty JSON body requests and other edge cases if any.
 *
 * @param  {Object}   request
 * @param  {Object}   response
 * @param  {Function} next
 */
function json(request, response, next) {
  const {
    body,
    method
  } = request;
  const disallowedHttpHeaders = ['PUT', 'POST', 'PATCH'];

  if (request.is('application/json') && disallowedHttpHeaders.includes(method) && (0, _isEmpty2.default)(body)) {
    throw _boom.default.badRequest('Empty JSON');
  }

  next();
}
//# sourceMappingURL=json.js.map