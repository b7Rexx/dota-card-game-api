import bookshelf from '../db';
import jwt from 'jsonwebtoken';

/**
 * Authenticatable class with jwt functions
 * extending Model
 */
class Authenticatable extends bookshelf.Model {
  /**
   * Create jwt token.
   *
   * @param {*} id
   */
  getJwtToken(id) {
    return jwt.sign({ id: id }, 'shhhhh', { expiresIn: '1d' });
  }
}

export default Authenticatable;
