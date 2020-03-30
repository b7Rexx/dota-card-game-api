"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TABLE_NAME = 'records';
/**
 * Record model.
 */

class Record extends _db.default.Model {
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
   * Get many to one relation user.
   */


  relateUser() {
    return this.belongsTo(_user.default);
  }

}

var _default = Record;
exports.default = _default;
//# sourceMappingURL=record.js.map