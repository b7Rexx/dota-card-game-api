import bookshelf from '../db';
import HeroType from './hero_type';
import HeroImage from './hero_image';

const TABLE_NAME = 'heroes';

/**
 * Hero model.
 */
class Hero extends bookshelf.Model {
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
   * Get many to one relation hero type.
   */
  relateHeroType() {
    return this.belongsTo(HeroType);
  }

  /**
   * Get one to many relation hero images.
   */
  relateHeroImages() {
    return this.hasMany(HeroImage);
  }
}

export default Hero;
