import bookshelf from '../db';

const TABLE_NAME = 'hero_types';

/**
 * HeroType model.
 */
class HeroType extends bookshelf.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }
}

export default HeroType;
