import { Model, DataTypes, Sequelize } from 'sequelize';

export const USER_TABLE = 'users';

// le ayuda a sequelize a ver como debe crear la tabla
export const userSchema = {
  id: {
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    field: 'last_name',
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  profile: {
    allowNull: true,
    type: DataTypes.BLOB,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  }
};


interface AssociateModels {
  [key: string]: Model;
}

export class User extends Model {
  static associate(models: any) {
    this.hasMany(models.Publication, {
      as: 'Publications',
      foreignKey: 'author',
    });
    this.hasMany(models.Commentary, {
      as: 'Comentaries',
      foreignKey: 'author',
    });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true,
    };
  }
}
