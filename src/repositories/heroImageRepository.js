import fs from 'fs';
import { imagePath, originalPath, thumbnailPath } from '../uploadPath';
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

  /**
   * Call remove after image unlink.
   *
   * @param {*} imageId
   */
  removeImagebyId(imageId) {
    return this.getById(imageId).then((data) => {
      const image = imagePath + '/' + (data.model.attributes.image || '');
      const thumbnail = thumbnailPath + '/' + data.model.attributes.thumbnail || '';
      const original = originalPath + '/' + data.model.attributes.original || '';

      if (fs.existsSync(image)) {
        fs.unlinkSync(image);
      }
      if (fs.existsSync(thumbnail)) {
        fs.unlinkSync(thumbnail);
      }
      if (fs.existsSync(original)) {
        fs.unlinkSync(original);
      }

      return this.remove(imageId);
    });
  }
}
export default new HeroImageRepository();
