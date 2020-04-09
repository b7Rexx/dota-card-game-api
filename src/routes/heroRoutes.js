import { Router } from 'express';

import * as heroController from '../controllers/heroes';
import upload from '../middlewares/upload';
import { imageMulterOptional } from '../middlewares/imageMulter';
import { findHero, heroValidator } from '../validators/heroValidator';
import adminAuthenticate from '../middlewares/adminAuthenticate';

const router = Router();

/**
 * GET /api/heroes
 */
router.get('/', heroController.fetchAll);

/**
 * GET /api/heroes/paginate
 * @params {number} page default = 1
 * @params {number} pagesize default = 10
 */
router.get('/paginate', heroController.paginate);

/**
 * GET /api/heroes/:id
 */
router.get('/:id', adminAuthenticate, heroController.fetchById);

/**
 * POST /api/heroes
 */
router.post('/', adminAuthenticate, heroValidator, upload.single('image'), imageMulterOptional, heroController.create);

/**
 * PUT /api/heroes/:id
 */
router.put(
  '/:id',
  adminAuthenticate,
  findHero,
  heroValidator,
  upload.single('image'),
  imageMulterOptional,
  heroController.update
);

/**
 * DELETE /api/heroes/:id
 */
router.delete('/:id', adminAuthenticate, findHero, heroController.remove);

export default router;
