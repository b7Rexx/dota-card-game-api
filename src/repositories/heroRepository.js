import Hero from '../models/hero';
import baseRepository from './baseRepository';

/**
 * Returns hero repo
 */
class HeroRepository extends baseRepository {
  /**
   * Init Hero modal.
   */
  constructor() {
    super(Hero);
    this.defaultOrder = 'name';
    this.withRelated = ['relateHeroType', 'relateHeroImages'];
  }
}
export default new HeroRepository();
