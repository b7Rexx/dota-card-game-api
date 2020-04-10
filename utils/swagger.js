"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Swagger definition.
 */
const swaggerDefinition = {
  info: {
    title: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    description: process.env.APP_DESCRIPTION
  },
  basePath: '/api'
};
/**
 * Options for the swagger docs.
 */

const swaggerOptions = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: [_path.default.join(__dirname, '/../routes.js'), _path.default.join(__dirname, '/../docs/*.js'), _path.default.join(__dirname, '/../docs/*.yml'), _path.default.join(__dirname, '/../docs/*.yaml')]
};
/**
 * Initialize swagger-jsdoc.
 */

const swaggerSpec = (0, _swaggerJsdoc.default)(swaggerOptions);
var _default = swaggerSpec;
exports.default = _default;
//# sourceMappingURL=swagger.js.map