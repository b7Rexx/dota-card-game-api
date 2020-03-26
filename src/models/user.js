import Authenticatable from '../utils/authenticatable';

const TABLE_NAME = 'users';

/**
 * User model.
 */
class User extends Authenticatable {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default User;
