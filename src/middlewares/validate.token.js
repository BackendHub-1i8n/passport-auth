import { configutations } from '../config/app.config.js';
import jwt from 'jsonwebtoken';

const tokenSecret = configutations.jwtSecret;

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, tokenSecret, (err, user) => {
    if (err) return res.status(403).json({ message: 'invalid token' });
    req.user = user;
    next();
  });
};
