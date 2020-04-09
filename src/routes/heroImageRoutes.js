import { Router } from 'express';

import upload from '../middlewares/upload';
import { imageMulterRequired } from '../middlewares/imageMulter';
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
router.post('/', heroImageValidator, upload.single('image'), imageMulterRequired, heroImageController.create);

/**
 * PUT /api/heroes/:id
 */
router.put(
  '/:id',
  findHeroImage,
  heroImageValidator,
  upload.single('image'),
  imageMulterRequired,
  heroImageController.update
);

/**
 * DELETE /api/heroes/:id
 */
router.delete('/:id', findHeroImage, heroImageController.remove);

export default router;
