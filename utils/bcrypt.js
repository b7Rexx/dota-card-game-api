"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPass = hashPass;
exports.comparePass = comparePass;

const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
/**
 * Utility helper for hashing password.
 *
 * @param {*} password
 */

function hashPass(password) {
  return bcrypt.hashSync(password, salt);
}
/**
 * Utility helper for comparing password to hash.
 *
 * @param {*} password
 * @param {*} hash
 */


function comparePass(password, hash) {
  return bcrypt.compareSync(password, hash);
}
//# sourceMappingURL=bcrypt.js.map