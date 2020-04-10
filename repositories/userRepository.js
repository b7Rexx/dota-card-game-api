"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../models/user"));

var _baseRepository = _interopRequireDefault(require("./baseRepository"));

var _jwtAuth = require("../utils/jwtAuth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * returns user repo
 */
class UserRepository extends _baseRepository.default {
  /**
   * Init User Modal.
   */
  constructor() {
    super(_user.default);
    this.withRelated = ['relateRecords'];
  }
  /**
   * Returns access token with expire time.
   *
   * @param {*} user
   * @returns {*}
   */


  accessToken(user) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return {
      type: 'bearer',
      token: (0, _jwtAuth.getJwtToken)(user.id),
      expire_at: date,
      isAdmin: user.isAdmin || 0,
      user: user
    };
  }

}

var _default = new UserRepository();

exports.default = _default;
//# sourceMappingURL=userRepository.js.map