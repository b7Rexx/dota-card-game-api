"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _record = _interopRequireDefault(require("../models/record"));

var _baseRepository = _interopRequireDefault(require("./baseRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * returns user repo
 */
class RecordRepository extends _baseRepository.default {
  /**
   * Init Record Modal.
   */
  constructor() {
    super(_record.default);
    this.withRelated = ['relateUser'];
  }

}

var _default = new RecordRepository();

exports.default = _default;
//# sourceMappingURL=recordRepository.js.map