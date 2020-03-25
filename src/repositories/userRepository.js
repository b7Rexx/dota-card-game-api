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
  }
}
export default new UserRepository();
