import User from '../models/user';
import baseRepository from './baseRepository';
import { getJwtToken } from '../utils/jwtAuth';

/**
 * returns user repo
 */
class UserRepository extends baseRepository {
  /**
   * Init User Modal.
   */
  constructor() {
    super(User);
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
      token: getJwtToken(user.id),
      expire_at: date,
      isAdmin: user.isAdmin || 0,
      user: user,
    };
  }
}
export default new UserRepository();
