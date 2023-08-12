import dotenv from 'dotenv';

dotenv.config();
export const configutations = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3001,
};
