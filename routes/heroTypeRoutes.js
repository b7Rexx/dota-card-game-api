"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var heroTypeController = _interopRequireWildcard(require("../controllers/heroTypes"));

var _heroTypeValidator = require("../validators/heroTypeValidator");

var _adminAuthenticate = _interopRequireDefault(require("../middlewares/adminAuthenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const router = (0, _express.Router)();
/**
 * GET /api/herotypes
 */

router.get('/', heroTypeController.fetchAll);
/**
 * GET /api/herotypes/:id
 */

router.get('/:id', heroTypeController.fetchById);
/**
 * POST /api/herotypes
 */

router.post('/', _adminAuthenticate.default, _heroTypeValidator.heroTypeValidator, heroTypeController.create);
/**
 * PUT /api/herotypes/:id
 */

router.put('/:id', _adminAuthenticate.default, _heroTypeValidator.findHeroType, _heroTypeValidator.heroTypeValidator, heroTypeController.update);
/**
 * DELETE /api/herotypes/:id
 */

router.delete('/:id', _adminAuthenticate.default, _heroTypeValidator.findHeroType, heroTypeController.remove);
var _default = router;
exports.default = _default;
//# sourceMappingURL=heroTypeRoutes.js.map