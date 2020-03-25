const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

/**
 * Utility helper for hashing password.
 *
 * @param {*} password
 */
export function hashPass(password) {
  return bcrypt.hashSync(password, salt);
}

/**
 * Utility helper for comparing password to hash.
 *
 * @param {*} password
 * @param {*} hash
 */
export function comparePass(password, hash) {
  return bcrypt.compareSync(password, hash);
}
