import { Request, Response } from 'express';
import Author from '../models/author';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message:error});
  }
};

export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message:error});
  }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ message:error});
  }
};

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const [updated] = await Author.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Author not found' });
    res.status(200).json({ message: 'Author updated' });
  } catch (error) {
    res.status(500).json({ message:error});
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const deleted = await Author.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Author not found' });
    res.status(200).json({ message: 'Author deleted' });
  } catch (error) {
    res.status(500).json({ message:error});
  }
};
