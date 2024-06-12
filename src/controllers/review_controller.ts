import { Request, Response } from 'express';
import Review from '../models/review';

export const getReviewsForBook = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.findAll({ where: { bookId: req.params.bookId } });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message:error});
  }
};

export const addReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.create({ ...req.body, userId: (req as any).user.id, bookId: req.params.bookId });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message:error});
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    if (review.userId !== (req as any).user.id) return res.status(403).send('Forbidden');
    await review.destroy();
    res.status(200).json({ message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ message:error});
  }
};
