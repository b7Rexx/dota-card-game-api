import { Router } from 'express';

import * as heroTypeController from '../controllers/heroTypes';
import { findHeroType, heroTypeValidator } from '../validators/heroTypeValidator';
import adminAuthenticate from '../middlewares/adminAuthenticate';

const router = Router();

/**
 * GET /api/herotypes
 */
router.get('/', heroTypeController.fetchAll);

/**
 * GET /api/herotypes/:id
 */
router.get('/:id', heroTypeController.fetchById);

/**
 * POST /api/herotypes
 */
router.post('/', adminAuthenticate, heroTypeValidator, heroTypeController.create);

/**
 * PUT /api/herotypes/:id
 */
router.put('/:id', adminAuthenticate, findHeroType, heroTypeValidator, heroTypeController.update);

/**
 * DELETE /api/herotypes/:id
 */
router.delete('/:id', adminAuthenticate, findHeroType, heroTypeController.remove);

export default router;
