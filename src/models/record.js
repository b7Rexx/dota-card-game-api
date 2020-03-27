import bookshelf from '../db';
import User from '../models/user';

const TABLE_NAME = 'records';

/**
 * Record model.
 */
class Record extends bookshelf.Model {
  /**
   *RElation Model definitions.
   */
  constructor() {
    super();
    this.user = User;
  }

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
    return this.belongsTo(this.user);
  }
}

export default Record;
