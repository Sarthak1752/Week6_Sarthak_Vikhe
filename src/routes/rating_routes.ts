import express from 'express';
import { getRatingsForBook, addRating } from '../controllers/rating_controller';
import { isAuthenticated } from '../middleware/auth_middleware';

const router = express.Router();

router.get('/books/:bookId/ratings', getRatingsForBook);
router.post('/books/:bookId/ratings', isAuthenticated, addRating);

export default router;
