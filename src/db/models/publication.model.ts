import { Model, DataTypes, Sequelize } from 'sequelize';
import { USER_TABLE } from './user.model';

export const PUBLICATION_TABLE = 'publications';

export const publicationSchema = {
  id: {
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  body: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  author: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

export class Publication extends Model {
  static associate(models: any) {
    this.belongsTo(models.User, {as:'belongs_To_Author'})
    this.hasMany(models.Commentary, {as:'Commentaries', foreignKey:'publicationId'} )
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: PUBLICATION_TABLE,
      modelName: 'Publication',
      timestamps: true,
    };
  }
}
