"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var recordController = _interopRequireWildcard(require("../controllers/records"));

var _recordValidator = require("../validators/recordValidator");

var _authenticate = _interopRequireDefault(require("../middlewares/authenticate"));

var _adminAuthenticate = _interopRequireDefault(require("../middlewares/adminAuthenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const router = (0, _express.Router)();
/**
 * GET /api/records
 */

router.get('/', _adminAuthenticate.default, recordController.fetchAll);
/**
 * GET /api/records/paginate
 * @params {number} page default = 1
 * @params {number} pagesize default = 10
 */

router.get('/paginate', _adminAuthenticate.default, recordController.paginate);
/**
 * GET /api/records/:id
 */

router.get('/:id', _adminAuthenticate.default, recordController.fetchById);
/**
 * POST /api/records
 */

router.post('/', _authenticate.default, _recordValidator.recordValidator, recordController.create);
/**
 * PUT /api/records/:id
 */

router.put('/:id', _adminAuthenticate.default, _recordValidator.findRecord, _recordValidator.recordValidator, recordController.update);
/**
 * DELETE /api/records/:id
 */

router.delete('/:id', _adminAuthenticate.default, _recordValidator.findRecord, recordController.remove);
var _default = router;
exports.default = _default;
//# sourceMappingURL=recordRoutes.js.map