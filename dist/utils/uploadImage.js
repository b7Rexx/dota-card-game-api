"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveResizedImages = saveResizedImages;

var _sharp = _interopRequireDefault(require("sharp"));

var _uuid = require("uuid");

var _path = _interopRequireDefault(require("path"));

var _uploadPath = require("../uploadPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resize images with buffer returning imageName in promise.
 *
 * @param {*} base64Img
 * @returns {Promise}
 */
function saveResizedImages(base64Img) {
  base64Img = base64Img.split('base64,')[1];
  const buffer = Buffer.from(base64Img, 'base64');
  const imageName = `${(0, _uuid.v4)()}.png`;
  return new Promise(resolve => {
    resolve();
  }).then(() => {
    const image = _path.default.resolve(`${_uploadPath.imagePath}/image_${imageName}`);

    (0, _sharp.default)(buffer).resize(100, 100, {
      fit: _sharp.default.fit.inside,
      withoutEnlargement: true
    }).toFile(image);
  }).then(() => {
    const thumbnail = _path.default.resolve(`${_uploadPath.thumbnailPath}/thumbnail_${imageName}`);

    (0, _sharp.default)(buffer).resize(50, 50, {
      fit: _sharp.default.fit.inside,
      withoutEnlargement: true
    }).toFile(thumbnail);
  }).then(() => {
    const original = _path.default.resolve(`${_uploadPath.originalPath}/original_${imageName}`);

    (0, _sharp.default)(buffer).toFile(original);
    return imageName;
  });
}
//# sourceMappingURL=uploadImage.js.map