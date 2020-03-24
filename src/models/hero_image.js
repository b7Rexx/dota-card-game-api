import bookshelf from '../db';

const TABLE_NAME = 'hero_images';

/**
 * HeroImage model.
 */
class HeroImage extends bookshelf.Model {
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

export default HeroImage;
