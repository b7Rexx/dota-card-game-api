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
  }
  /**
   * Returns access token with expire time.
   *
   * @param {*} id
   * @returns {*}
   */


  accessToken(id) {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return {
      type: 'bearer',
      token: (0, _jwtAuth.getJwtToken)(id),
      expire_at: date
    };
  }

}

var _default = new UserRepository();

exports.default = _default;
//# sourceMappingURL=userRepository.js.map