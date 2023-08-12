import dotenv from 'dotenv';

dotenv.config();
export const configutations = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3001,
  dbDatabaseName: process.env.MYSQL_DATABASE,
  dbUser: process.env.MYSQL_USER,
  dbPassword: process.env.MYSQL_PASSWORD,
  dbPort: process.env.MYSQL_DB_PORT,
  dbHost: process.env.MYSQL_DB_HOST,
};
