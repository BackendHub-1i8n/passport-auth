import { configutations } from '../config/app.config.js'
import { Sequelize } from 'sequelize'

const USER = encodeURIComponent(configutations.dbUser);
const PASSWORD = encodeURIComponent(configutations.dbPassword);

const URI = `mysql://${USER}:${PASSWORD}@${configutations.dbHost}:${configutations.dbPort}/${configutations.dbDatabaseName}`;


export const sequelise = new Sequelize(
  URI,
  {
    dialect: 'mysql',
    logging:true
  }
)



sequelise.sync()
