import { Router } from 'express';

import * as recordController from '../controllers/records';
import { findRecord, recordValidator } from '../validators/recordValidator';
import authenticate from '../middlewares/authenticate';
import adminAuthenticate from '../middlewares/adminAuthenticate';

const router = Router();

/**
 * GET /api/records
 */
router.get('/', adminAuthenticate, recordController.fetchAll);

/**
 * GET /api/records/paginate
 * @params {number} page default = 1
 * @params {number} pagesize default = 10
 */
router.get('/paginate', adminAuthenticate, recordController.paginate);

/**
 * GET /api/records/:id
 */
router.get('/:id', adminAuthenticate, recordController.fetchById);

/**
 * POST /api/records
 */
router.post('/', authenticate, recordValidator, recordController.create);

/**
 * PUT /api/records/:id
 */
router.put('/:id', adminAuthenticate, findRecord, recordValidator, recordController.update);

/**
 * DELETE /api/records/:id
 */
router.delete('/:id', adminAuthenticate, findRecord, recordController.remove);

export default router;
