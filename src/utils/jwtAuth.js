import jwt from 'jsonwebtoken';

/**
 * Create jwt token.
 *
 * @param {*} id
 */
export function getJwtToken(id) {
  return jwt.sign({ id: id }, 'ThisIsSecret', { expiresIn: '1d' });
}

/**
 * Verify jwt token.
 *
 * @param {*} token
 * @returns {Promise}
 */
export function verifyJwtToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'ThisIsSecret', function (err, decoded) {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
}
