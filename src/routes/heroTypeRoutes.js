import { Router } from 'express';

import * as heroTypeController from '../controllers/herotypes';
import { findHeroType, heroTypeValidator } from '../validators/heroTypeValidator';

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
router.post('/', heroTypeValidator, heroTypeController.create);

/**
 * PUT /api/herotypes/:id
 */
router.put('/:id', findHeroType, heroTypeValidator, heroTypeController.update);

/**
 * DELETE /api/herotypes/:id
 */
router.delete('/:id', findHeroType, heroTypeController.remove);

export default router;
