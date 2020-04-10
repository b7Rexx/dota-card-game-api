"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

var _hero_type = _interopRequireDefault(require("./hero_type"));

var _hero_image = _interopRequireDefault(require("./hero_image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TABLE_NAME = 'heroes';
/**
 * Hero model.
 */

class Hero extends _db.default.Model {
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
  /**
   * Get many to one relation hero type.
   */


  relateHeroType() {
    return this.belongsTo(_hero_type.default);
  }
  /**
   * Get one to many relation hero images.
   */


  relateHeroImages() {
    return this.hasMany(_hero_image.default);
  }

}

var _default = Hero;
exports.default = _default;
//# sourceMappingURL=hero.js.map