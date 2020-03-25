import { Router } from 'express';

import * as recordController from '../controllers/records';
import { findRecord, recordValidator } from '../validators/recordValidator';

const router = Router();

/**
 * GET /api/records
 */
router.get('/', recordController.fetchAll);

/**
 * GET /api/records/:id
 */
router.get('/:id', recordController.fetchById);

/**
 * POST /api/records
 */
router.post('/', recordValidator, recordController.create);

/**
 * PUT /api/records/:id
 */
router.put('/:id', findRecord, recordValidator, recordController.update);

/**
 * DELETE /api/records/:id
 */
router.delete('/:id', findRecord, recordController.remove);

export default router;
