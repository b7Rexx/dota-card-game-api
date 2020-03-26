import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { imagePath, originalPath, thumbnailPath } from '../uploadPath';

/**
 * Resize images with buffer returning imageName in promise.
 *
 * @param {*} base64Img
 * @returns {Promise}
 */
export function saveResizedImages(base64Img) {
  base64Img = base64Img.split('base64,')[1];
  const buffer = Buffer.from(base64Img, 'base64');
  const imageName = `${uuidv4()}.png`;

  return new Promise((resolve) => {
    resolve();
  })
    .then(() => {
      const image = path.resolve(`${imagePath}/image_${imageName}`);

      sharp(buffer)
        .resize(100, 100, {
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .toFile(image);
    })
    .then(() => {
      const thumbnail = path.resolve(`${thumbnailPath}/thumbnail_${imageName}`);

      sharp(buffer)
        .resize(50, 50, {
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .toFile(thumbnail);
    })
    .then(() => {
      const original = path.resolve(`${originalPath}/original_${imageName}`);

      sharp(buffer).toFile(original);

      return imageName;
    });
}
