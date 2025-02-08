import { NextFunction, Request, Response } from 'express';
import { configutations } from '../config/app.config';
import jwt from 'jsonwebtoken';

const tokenSecret = configutations.jwtSecret;

export const authRequired = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, tokenSecret, (err: any, user: any) => {
    if (err) return res.status(403).json({ message: 'invalid token' });
    req.user = user;
    next();
  });
};
