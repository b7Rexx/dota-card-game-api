"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hero_type = _interopRequireDefault(require("../models/hero_type"));

var _baseRepository = _interopRequireDefault(require("./baseRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * return hero_type repo
 */
class HeroTypeRepository extends _baseRepository.default {
  /**
   * Init HeroTypeModal.
   */
  constructor() {
    super(_hero_type.default);
  }

}

var _default = new HeroTypeRepository();

exports.default = _default;
//# sourceMappingURL=heroTypeRepository.js.map