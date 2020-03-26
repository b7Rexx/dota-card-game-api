import { Router } from 'express';

import * as authController from '../controllers/auth';
import { authValidator } from '../validators/authValidator';

const router = Router();

/**
 * POST /api/auth/login
 */
router.post('/login', authValidator, authController.login);

export default router;
