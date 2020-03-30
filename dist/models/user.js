"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

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

}

var _default = User;
exports.default = _default;
//# sourceMappingURL=user.js.map