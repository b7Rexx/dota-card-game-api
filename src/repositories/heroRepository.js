import Hero from '../models/hero';
import baseRepository from './baseRepository';

/**
 * returns hero repo
 */
class HeroRepository extends baseRepository {
  /**
   * Init Hero modal.
   */
  constructor() {
    super(Hero);
  }
}
export default new HeroRepository();
