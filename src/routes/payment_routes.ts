import express from 'express';
import { createPayment, getPaymentById } from '../controllers/payment_controller';
import { isAuthenticated } from '../middleware/auth_middleware';

const router = express.Router();

router.post('/payments', isAuthenticated, createPayment);
router.get('/payments/:id', isAuthenticated, getPaymentById);

export default router;
