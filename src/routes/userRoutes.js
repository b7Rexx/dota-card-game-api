import { Router } from 'express';

import * as userController from '../controllers/users';
import { findUser, userValidator } from '../validators/userValidator';
import authenticate from '../middlewares/authenticate';
import adminAuthenticate from '../middlewares/adminAuthenticate';

const router = Router();

/**
 * GET /api/users
 */
router.get('/', adminAuthenticate, userController.fetchAll);

/**
 * GET /api/users/paginate
 * @params {number} page default = 1
 * @params {number} pagesize default = 10
 */
router.get('/paginate', adminAuthenticate, userController.paginate);

/**
 * GET /api/users/:id
 */
router.get('/:id', authenticate, userController.fetchById);

/**
 * POST /api/users
 */
router.post('/', userValidator, userController.create);

/**
 * PUT /api/users/:id
 */
router.put('/:id', authenticate, findUser, userValidator, userController.update);

/**
 * DELETE /api/users/:id
 */
router.delete('/:id', authenticate, findUser, userController.remove);

export default router;
