import HeroType from '../models/hero_type';
import baseRepository from './baseRepository';

/**
 * return hero_type repo
 */
class HeroTypeRepository extends baseRepository {
  /**
   * Init HeroTypeModal.
   */
  constructor() {
    super(HeroType);
  }
}
export default new HeroTypeRepository();
