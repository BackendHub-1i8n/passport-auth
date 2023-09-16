import { configutations } from '../config/app.config.js';
import { Sequelize } from 'sequelize';
import { setupModels } from '../db/models/index.js';

const USER = encodeURIComponent(configutations.dbUser);
const PASSWORD = encodeURIComponent(configutations.dbPassword);

const URI = `mysql://${USER}:${PASSWORD}@${configutations.dbHost}:${configutations.dbPort}/${configutations.dbDatabaseName}`;

console.log(URI);
export const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});

setupModels(sequelize);

const isProd = (configutations.isProd)
//console.log(isProd)
sequelize.sync({ force: isProd });
