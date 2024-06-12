import express from 'express';
import { register, login, getCurrentUser } from '../controllers/user_controller';
import { isAuthenticated } from '../middleware/auth_middleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', isAuthenticated, getCurrentUser);

export default router;
