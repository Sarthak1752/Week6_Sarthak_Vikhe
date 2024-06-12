import { Request, Response } from 'express';
import Rating from '../models/rating';

export const getRatingsForBook = async (req: Request, res: Response) => {
  try {
    const ratings = await Rating.findAll({ where: { bookId: req.params.bookId } });
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ message:error});
  }
};

export const addRating = async (req: Request, res: Response) => {
  try {
    const rating = await Rating.create({ ...req.body, userId: (req as any).user.id, bookId: req.params.bookId });
    res.status(201).json(rating);
  } catch (error) {
    res.status(500).json({ message:error});
  }
};
