import { Router } from 'express';

import * as heroController from '../controllers/heroes';
import { findHero, heroValidator } from '../validators/heroValidator';

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
router.get('/:id', heroController.fetchById);

/**
 * POST /api/heroes
 */
router.post('/', heroValidator, heroController.create);

/**
 * PUT /api/heroes/:id
 */
router.put('/:id', findHero, heroValidator, heroController.update);

/**
 * DELETE /api/heroes/:id
 */
router.delete('/:id', findHero, heroController.remove);

export default router;
