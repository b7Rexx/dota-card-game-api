import isBase64 from 'is-base64';
import Boom from '@hapi/boom';
import { saveResizedImages } from '../utils/uploadImage';

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function imageMulterRequired(req, res, next) {
  if (isBase64(req.body.image, { allowMime: true })) {
    saveResizedImages(req.body.image).then((filename) => {
      req.body.image = `image_${filename}`;
      req.body.original = `original_${filename}`;
      req.body.thumbnail = `thumbnail_${filename}`;
      next();
    });
  } else {
    return next(Boom.notAcceptable('invalid image format'));
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function imageMulterOptional(req, res, next) {
  if (req.body.image) {
    if (isBase64(req.body.image, { allowMime: true })) {
      saveResizedImages(req.body.image).then((filename) => {
        req.body.option = true;
        req.body.image = `image_${filename}`;
        req.body.original = `original_${filename}`;
        req.body.thumbnail = `thumbnail_${filename}`;
        next();
      });
    }
  } else {
    next();
  }
}
