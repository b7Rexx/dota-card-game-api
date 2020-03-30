"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build error response for validation errors.
 *
 * @param   {Error} err
 * @returns {Object}
 */
function buildError(err) {
  // Validation errors
  if (err.isJoi) {
    return {
      code: _httpStatusCodes.default.BAD_REQUEST,
      message: _httpStatusCodes.default.getStatusText(_httpStatusCodes.default.BAD_REQUEST),
      details: err.details && err.details.map(err => {
        return {
          message: err.message,
          param: err.path.join('.')
        };
      })
    };
  } // HTTP errors


  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message || err.output.payload.error
    };
  } // Return INTERNAL_SERVER_ERROR for all other cases


  return {
    code: _httpStatusCodes.default.INTERNAL_SERVER_ERROR,
    message: _httpStatusCodes.default.getStatusText(_httpStatusCodes.default.INTERNAL_SERVER_ERROR)
  };
}

var _default = buildError;
exports.default = _default;
//# sourceMappingURL=buildError.js.map