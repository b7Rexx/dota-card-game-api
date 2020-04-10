"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _uploadPath = require("../uploadPath");

var _hero_image = _interopRequireDefault(require("../models/hero_image"));

var _baseRepository = _interopRequireDefault(require("./baseRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * returns hero repo
 */
class HeroImageRepository extends _baseRepository.default {
  /**
   * Init HeroImage modal.
   */
  constructor() {
    super(_hero_image.default);
  }
  /**
   * Call remove after image unlink.
   *
   * @param {*} imageId
   */


  removeImagebyId(imageId) {
    return this.getById(imageId).then(data => {
      const image = _uploadPath.imagePath + '/' + (data.model.attributes.image || '');
      const thumbnail = _uploadPath.thumbnailPath + '/' + data.model.attributes.thumbnail || '';
      const original = _uploadPath.originalPath + '/' + data.model.attributes.original || '';

      if (_fs.default.existsSync(image)) {
        _fs.default.unlinkSync(image);
      }

      if (_fs.default.existsSync(thumbnail)) {
        _fs.default.unlinkSync(thumbnail);
      }

      if (_fs.default.existsSync(original)) {
        _fs.default.unlinkSync(original);
      }

      return this.remove(imageId);
    });
  }

}

var _default = new HeroImageRepository();

exports.default = _default;
//# sourceMappingURL=heroImageRepository.js.map