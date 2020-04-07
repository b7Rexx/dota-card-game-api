import bookshelf from '../db';
import User from './user';

const TABLE_NAME = 'records';

/**
 * Record model.
 */
class Record extends bookshelf.Model {
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
   * Get many to one relation user.
   */
  relateUser() {
    return this.belongsTo(User);
  }
}

export default Record;
