"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFound = notFound;
exports.methodNotAllowed = methodNotAllowed;
exports.bodyParser = bodyParser;
exports.genericErrorHandler = genericErrorHandler;

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _logger = _interopRequireDefault(require("../utils/logger"));

var _buildError = _interopRequireDefault(require("../utils/buildError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Error response middleware for 404 not found.
 *
 * @param {Object} req
 * @param {Object} res
 */
function notFound(req, res) {
  res.status(_httpStatusCodes.default.NOT_FOUND).json({
    error: {
      code: _httpStatusCodes.default.NOT_FOUND,
      message: _httpStatusCodes.default.getStatusText(_httpStatusCodes.default.NOT_FOUND)
    }
  });
}
/**
 * Method not allowed error middleware. This middleware should be placed at
 * the very bottom of the middleware stack.
 *
 * @param {Object} req
 * @param {Object} res
 */


function methodNotAllowed(req, res) {
  res.status(_httpStatusCodes.default.METHOD_NOT_ALLOWED).json({
    error: {
      code: _httpStatusCodes.default.METHOD_NOT_ALLOWED,
      message: _httpStatusCodes.default.getStatusText(_httpStatusCodes.default.METHOD_NOT_ALLOWED)
    }
  });
}
/**
 * To handle errors from body parser for cases such as invalid JSON sent through
 * the body (https://github.com/expressjs/body-parser#errors).
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */


function bodyParser(err, req, res, next) {
  _logger.default.error(err.message);

  res.status(err.status).json({
    error: {
      code: err.status,
      message: _httpStatusCodes.default.getStatusText(err.status)
    }
  });
}
/**
 * Generic error response middleware for validation and internal server errors.
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */


function genericErrorHandler(err, req, res, next) {
  _logger.default.error(err.stack);

  const error = (0, _buildError.default)(err);
  res.status(error.code).json({
    error
  });
}
//# sourceMappingURL=errorHandler.js.map