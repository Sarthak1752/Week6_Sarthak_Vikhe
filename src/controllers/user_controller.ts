import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Check for role in request body, default to 'user'
    const role = req.body.role || 'user';

    const user = await User.create({ ...req.body, password: hashedPassword, role });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({  "message":error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message:error});
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk((req as any).user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({  "message":error });
  }
};
