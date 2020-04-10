"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _upload = _interopRequireDefault(require("../middlewares/upload"));

var _imageMulter = require("../middlewares/imageMulter");

var heroImageController = _interopRequireWildcard(require("../controllers/heroImages"));

var _heroImageValidator = require("../validators/heroImageValidator");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
/**
 * GET /api/heroes
 */

router.get('/', heroImageController.fetchAll);
/**
 * GET /api/heroes/:id
 */

router.get('/:id', heroImageController.fetchById);
/**
 * POST /api/heroes
 */

router.post('/', _heroImageValidator.heroImageValidator, _upload.default.single('image'), _imageMulter.imageMulterRequired, heroImageController.create);
/**
 * PUT /api/heroes/:id
 */

router.put('/:id', _heroImageValidator.findHeroImage, _heroImageValidator.heroImageValidator, _upload.default.single('image'), _imageMulter.imageMulterRequired, heroImageController.update);
/**
 * DELETE /api/heroes/:id
 */

router.delete('/:id', _heroImageValidator.findHeroImage, heroImageController.remove);
var _default = router;
exports.default = _default;
//# sourceMappingURL=heroImageRoutes.js.map