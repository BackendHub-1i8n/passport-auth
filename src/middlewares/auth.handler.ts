import { NextFunction, Request, Response } from 'express';
import { configutations } from '../config/app.config';

export function checkApyKey(req: Request, res: Response, next: NextFunction) {
  const api = req.headers['api'];
  console.log(configutations.apiKey);
  if (api === configutations.apiKey) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}
