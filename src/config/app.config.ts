import dotenv from 'dotenv';

dotenv.config();

interface Configurations {
  env: string;
  isProd: boolean;
  port: number | string;
  dbDatabaseName: string;
  dbUser: string;
  dbPassword: string;
  dbPort: string;
  dbHost: string;
  apiKey: string;
  jwtSecret: string;
  redisUrl: string;
}

export const configutations: Configurations = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3001,
  dbDatabaseName: process.env.MYSQL_DATABASE as string,
  dbUser: process.env.MYSQL_USER as string,
  dbPassword: process.env.MYSQL_PASSWORD as string,
  dbPort: process.env.MYSQL_DB_PORT as string,
  dbHost: process.env.MYSQL_DB_HOST as string,
  apiKey: process.env.API_KEY as string,
  jwtSecret: process.env.JWT_TOKEN_SECRET as string,
  redisUrl: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
};
