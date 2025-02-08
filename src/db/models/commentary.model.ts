import { DataTypes, Model, Sequelize } from 'sequelize';
import { USER_TABLE } from './user.model';
import { PUBLICATION_TABLE } from './publication.model';
export const COMMENTARY_TABLE = 'commentaries';

export const commentarySchema = {
  id: {
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  publicationId: {
    field: 'publication_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: PUBLICATION_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

export class Commentary extends Model {
  static associate(models: any) {
    this.belongsTo(models.User, { as: 'belongs_To_Author' });
    this.belongsTo(models.Publication, { as: 'publication' });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: COMMENTARY_TABLE,
      modelName: 'Commentary',
      timesTamps: true,
    };
  }
}
