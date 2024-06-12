import express from 'express';
import { getReviewsForBook, addReview, deleteReview } from '../controllers/review_controller';
import { isAuthenticated } from '../middleware/auth_middleware';

const router = express.Router();

router.get('/books/:bookId/reviews', getReviewsForBook);
router.post('/books/:bookId/reviews', isAuthenticated, addReview);
router.delete('/reviews/:id', isAuthenticated, deleteReview);

export default router;
