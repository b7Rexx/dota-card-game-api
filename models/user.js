"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

var _record = _interopRequireDefault(require("./record"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TABLE_NAME = 'users';
/**
 * User model.
 */

class User extends _db.default.Model {
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
   * Get one to many relation records.
   */


  relateRecords() {
    return this.hasMany(_record.default);
  }

}

var _default = User;
exports.default = _default;
//# sourceMappingURL=user.js.map