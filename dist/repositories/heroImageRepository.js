"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

}

var _default = new HeroImageRepository();

exports.default = _default;
//# sourceMappingURL=heroImageRepository.js.map