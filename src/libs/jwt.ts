import { configutations } from '../config/app.config';
import jwt from 'jsonwebtoken';
const tokenSecret = configutations.jwtSecret as string;

interface Payload {
  sub: number;
  email: string;
  role: string;
}

export function generateToken(payload: Payload): Promise<string | undefined> {
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
