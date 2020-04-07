import bookshelf from '../db';
import Record from './record';

const TABLE_NAME = 'users';

/**
 * User model.
 */
class User extends bookshelf.Model {
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

  /**
   * Get one to many relation records.
   */
  relateRecords() {
    return this.hasMany(Record);
  }
}

export default User;
