"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageMulterRequired = imageMulterRequired;
exports.imageMulterOptional = imageMulterOptional;

var _isBase = _interopRequireDefault(require("is-base64"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _uploadImage = require("../utils/uploadImage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function imageMulterRequired(req, res, next) {
  if ((0, _isBase.default)(req.body.image, {
    allowMime: true
  })) {
    (0, _uploadImage.saveResizedImages)(req.body.image).then(filename => {
      req.body.image = `image_${filename}`;
      req.body.original = `original_${filename}`;
      req.body.thumbnail = `thumbnail_${filename}`;
      next();
    });
  } else {
    return next(_boom.default.notAcceptable('invalid image format'));
  }
}
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */


function imageMulterOptional(req, res, next) {
  if (req.body.image) {
    if ((0, _isBase.default)(req.body.image, {
      allowMime: true
    })) {
      (0, _uploadImage.saveResizedImages)(req.body.image).then(filename => {
        req.body.option = true;
        req.body.image = `image_${filename}`;
        req.body.original = `original_${filename}`;
        req.body.thumbnail = `thumbnail_${filename}`;
        next();
      });
    }
  } else {
    next();
  }
}
//# sourceMappingURL=imageMulter.js.map