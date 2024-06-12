import { Request, Response } from 'express';
import  Book  from '../models/book';

export const getBooks = async (req: Request, res: Response) => {
  const books = await Book.findAll({ include: ['authors', 'reviews', 'ratings'] });
  res.json(books);
};

export const getBookById = async (req: Request, res: Response) => {
  const book = await Book.findByPk(req.params.id, { include: ['authors', 'reviews', 'ratings'] });
  if (!book) {
    return res.status(404).send('Book not found');
  }
  res.json(book);
};

export const createBook = async (req: Request, res: Response) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

export const updateBook = async (req: Request, res: Response) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) {
    return res.status(404).send('Book not found');
  }
  await book.update(req.body);
  res.json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) {
    return res.status(404).send('Book not found');
  }
  await book.destroy();
  res.status(204).send();
};
