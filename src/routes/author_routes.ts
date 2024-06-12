import express from 'express';
import { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../controllers/author_controller';
import { isAuthenticated, isAdmin } from '../middleware/auth_middleware';

const router = express.Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post('/', isAuthenticated, isAdmin, createAuthor);
router.put('/:id', isAuthenticated, isAdmin, updateAuthor);
router.delete('/:id', isAuthenticated, isAdmin, deleteAuthor);

export default router;
