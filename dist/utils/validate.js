"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Utility helper for Joi validation.
 *
 * @param   {object}  data
 * @param   {object}  schema
 * @returns {Promise}
 */
function validate(data, schema) {
  const {
    error,
    value
  } = schema.validate(data, {
    abortEarly: false
  });

  if (!(0, _isEmpty.default)(error)) {
    return Promise.reject(error);
  }

  return Promise.resolve(value);
}

var _default = validate;
exports.default = _default;
//# sourceMappingURL=validate.js.map