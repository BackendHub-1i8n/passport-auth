import { Sequelize, Model, DataTypes } from 'sequelize';

export const USER_TABLE = 'Clients';

export const clientSchema = {
  id: {
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull:false,
    type:DataTypes.STRING
  },
  email: {
    allowNull:false,
    type:DataTypes.STRING
  },
  password: {
    allowNull:false,
    type:DataTypes.STRING
  },
  profile: {
    allowNull:true,
    type:DataTypes.BLOB
  },
};

export class Client extends Model {
  static associate() {}
  static config(sequelise) {
    return {
      sequelise,
      tableName: USER_TABLE,
      modelName: 'Client',
      timestamps: true,
    };
  }
}
