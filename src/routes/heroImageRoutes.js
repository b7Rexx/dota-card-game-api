import { Router } from 'express';

import upload from '../middlewares/upload';
import { saveResizedImages } from '../utils/uploadImage';
import * as heroImageController from '../controllers/heroImages';
import { findHeroImage, heroImageValidator } from '../validators/heroImageValidator';

const router = Router();

/**
 * GET /api/heroes
 */
router.get('/', heroImageController.fetchAll);

/**
 * GET /api/heroes/:id
 */
router.get('/:id', heroImageController.fetchById);

/**
 * POST /api/heroes
 */
router.post(
  '/',
  heroImageValidator,
  upload.single('image'),
  function (req, res, next) {
    saveResizedImages(req.body.image).then((filename) => {
      req.body.image = `image_${filename}`;
      req.body.original = `original_${filename}`;
      req.body.thumbnail = `thumbnail_${filename}`;
      next();
    });
  },
  heroImageController.create
);

/**
 * PUT /api/heroes/:id
 */
router.put(
  '/:id',
  findHeroImage,
  heroImageValidator,
  upload.single('image'),
  function (req, res, next) {
    saveResizedImages(req.body.image).then((filename) => {
      req.body.image = `image_${filename}`;
      req.body.original = `original_${filename}`;
      req.body.thumbnail = `thumbnail_${filename}`;
      next();
    });
  },
  heroImageController.update
);

/**
 * DELETE /api/heroes/:id
 */
router.delete('/:id', findHeroImage, heroImageController.remove);

export default router;
