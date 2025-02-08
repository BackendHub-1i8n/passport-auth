import { User, USER_TABLE, userSchema } from './user.model'
import { COMMENTARY_TABLE, Commentary, commentarySchema } from './commentary.model'
import { PUBLICATION_TABLE, Publication, publicationSchema } from './publication.model'
import { Sequelize } from 'sequelize'

export function setupModels(sequelize: Sequelize){
  User.init(userSchema, User.config(sequelize))
  Publication.init(publicationSchema, Publication.config(sequelize))
  Commentary.init(commentarySchema, Commentary.config(sequelize))

  User.associate(sequelize.models)
  Publication.associate(sequelize.models)
  Commentary.associate(sequelize.models)
}
