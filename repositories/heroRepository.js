"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hero = _interopRequireDefault(require("../models/hero"));

var _baseRepository = _interopRequireDefault(require("./baseRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns hero repo
 */
class HeroRepository extends _baseRepository.default {
  /**
   * Init Hero modal.
   */
  constructor() {
    super(_hero.default);
    this.defaultOrder = 'name';
    this.withRelated = ['relateHeroType', 'relateHeroImages'];
  }

}

var _default = new HeroRepository();

exports.default = _default;
//# sourceMappingURL=heroRepository.js.map