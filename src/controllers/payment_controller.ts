import { Request, Response } from 'express';
import Payment from '../models/payment';
import { createGoCardlessPayment } from '../services/payment_service'; // hypothetical service function

export const createPayment = async (req: Request, res: Response) => {
  try {
    const { bookId, amount } = req.body;
    const userId = (req as any).user.id;

    // Process payment through GoCardless or other payment gateway
    const paymentStatus = await createGoCardlessPayment(userId,bookId, amount);

    // Create payment entry in the database
    const payment = await Payment.create({
      userId,
      bookId,
      amount,
      status: paymentStatus,
    });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message:error });
  }
};

export const getPaymentById = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findByPk(req.params.id);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message:error });
  }
};
