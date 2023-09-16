import { configutations } from '../config/app.config.js';
import jwt from 'jsonwebtoken';
const tokenSecret = configutations.jwtSecret;

export function generateToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      tokenSecret,
      {
        expiresIn: '1d',
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
}

// const payload = {
//   sub: 1,
//   role: 'admin',
// };

// generateToken(payload).then((token) => {
//   console.log(token);
// });
