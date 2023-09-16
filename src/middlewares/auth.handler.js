import { configutations } from '../config/app.config.js';

export function checkApyKey(req, res, next) {
  const api = req.headers['api'];
  console.log(configutations.apiKey);
  if (api === configutations.apiKey) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}
