import bookshelf from '../db';
import heroType from './hero_type';
import heroImages from './hero_image';

const TABLE_NAME = 'heroes';

/**
 * Hero model.
 */
class Hero extends bookshelf.Model {
  /**
   *RElation Model definitions.
   */
  constructor() {
    super();
    this.heroType = heroType;
    this.heroImages = heroImages;
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
   * Get many to one relation hero type.
   */
  relateHeroType() {
    return this.belongsTo(this.heroType);
  }

  /**
   * Get one to many relation hero images.
   */
  relateHeroImages() {
    return this.hasMany(this.heroImages);
  }
}

export default Hero;
