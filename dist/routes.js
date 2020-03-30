"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _swagger = _interopRequireDefault(require("./utils/swagger"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _heroRoutes = _interopRequireDefault(require("./routes/heroRoutes"));

var _heroTypeRoutes = _interopRequireDefault(require("./routes/heroTypeRoutes"));

var _heroImageRoutes = _interopRequireDefault(require("./routes/heroImageRoutes"));

var _recordRoutes = _interopRequireDefault(require("./routes/recordRoutes"));

var _authRoutes = _interopRequireDefault(require("./routes/authRoutes"));

var _adminAuthenticate = _interopRequireDefault(require("./middlewares/adminAuthenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Contains all API routes for the application.
 */
const router = (0, _express.Router)();
/**
 * GET /api/swagger.json
 */

router.get('/swagger.json', (req, res) => {
  res.json(_swagger.default);
});
/**
 * GET /api
 */

router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});
router.use('/auth', _authRoutes.default);
router.use('/heroes', _heroRoutes.default);
router.use('/records', _recordRoutes.default); // only admin authorized routes

router.use('/users', _userRoutes.default);
router.use('/heroimages', _adminAuthenticate.default, _heroImageRoutes.default);
router.use('/herotypes', _adminAuthenticate.default, _heroTypeRoutes.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=routes.js.map