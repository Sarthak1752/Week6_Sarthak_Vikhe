import { Router } from 'express';
import { getBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/book_controller';
import { isAuthenticated, isAdmin } from '../middleware/auth_middleware';

const router = Router();

router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/books', isAuthenticated, isAdmin, createBook);
router.put('/books/:id', isAuthenticated, isAdmin, updateBook);
router.delete('/books/:id', isAuthenticated, isAdmin, deleteBook);

export default router;
