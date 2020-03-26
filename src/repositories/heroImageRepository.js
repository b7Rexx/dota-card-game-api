import HeroImage from '../models/hero_image';
import baseRepository from './baseRepository';

/**
 * returns hero repo
 */
class HeroImageRepository extends baseRepository {
  /**
   * Init HeroImage modal.
   */
  constructor() {
    super(HeroImage);
  }
}
export default new HeroImageRepository();
