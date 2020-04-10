"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var heroController = _interopRequireWildcard(require("../controllers/heroes"));

var _upload = _interopRequireDefault(require("../middlewares/upload"));

var _imageMulter = require("../middlewares/imageMulter");

var _heroValidator = require("../validators/heroValidator");

var _adminAuthenticate = _interopRequireDefault(require("../middlewares/adminAuthenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const router = (0, _express.Router)();
/**
 * GET /api/heroes
 */

router.get('/', heroController.fetchAll);
/**
 * GET /api/heroes/paginate
 * @params {number} page default = 1
 * @params {number} pagesize default = 10
 */

router.get('/paginate', heroController.paginate);
/**
 * GET /api/heroes/:id
 */

router.get('/:id', _adminAuthenticate.default, heroController.fetchById);
/**
 * POST /api/heroes
 */

router.post('/', _adminAuthenticate.default, _heroValidator.heroValidator, _upload.default.single('image'), _imageMulter.imageMulterOptional, heroController.create);
/**
 * PUT /api/heroes/:id
 */

router.put('/:id', _adminAuthenticate.default, _heroValidator.findHero, _heroValidator.heroValidator, _upload.default.single('image'), _imageMulter.imageMulterOptional, heroController.update);
/**
 * DELETE /api/heroes/:id
 */

router.delete('/:id', _adminAuthenticate.default, _heroValidator.findHero, heroController.remove);
var _default = router;
exports.default = _default;
//# sourceMappingURL=heroRoutes.js.map