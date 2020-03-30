"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var userController = _interopRequireWildcard(require("../controllers/users"));

var _userValidator = require("../validators/userValidator");

var _authenticate = _interopRequireDefault(require("../middlewares/authenticate"));

var _adminAuthenticate = _interopRequireDefault(require("../middlewares/adminAuthenticate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const router = (0, _express.Router)();
/**
 * GET /api/users
 */

router.get('/', _adminAuthenticate.default, userController.fetchAll);
/**
 * GET /api/users/paginate
 * @params {number} page default = 1
 * @params {number} pagesize default = 10
 */

router.get('/paginate', _adminAuthenticate.default, userController.paginate);
/**
 * GET /api/users/:id
 */

router.get('/:id', _authenticate.default, userController.fetchById);
/**
 * POST /api/users
 */

router.post('/', _userValidator.userValidator, userController.create);
/**
 * PUT /api/users/:id
 */

router.put('/:id', _authenticate.default, _userValidator.findUser, _userValidator.userValidator, userController.update);
/**
 * DELETE /api/users/:id
 */

router.delete('/:id', _authenticate.default, _userValidator.findUser, userController.remove);
var _default = router;
exports.default = _default;
//# sourceMappingURL=userRoutes.js.map