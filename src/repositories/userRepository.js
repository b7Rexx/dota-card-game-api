import User from '../models/user';
import baseRepository from './baseRepository';

/**
 * returns user repo
 */
class UserRepository extends baseRepository {
  /**
   * Init User Modal.
   */
  constructor() {
    super(User);
    this.user = new User();
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
      token: this.user.getJwtToken(id),
      expire_at: date,
    };
  }
}
export default new UserRepository();
