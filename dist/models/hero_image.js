"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TABLE_NAME = 'hero_images';
/**
 * HeroImage model.
 */

class HeroImage extends _db.default.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }
  /**
   * Table has timestamps.
   */


  get hasTimestamps() {
    return true;
  }

}

var _default = HeroImage;
exports.default = _default;
//# sourceMappingURL=hero_image.js.map