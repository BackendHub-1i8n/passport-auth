import { sequelize } from '../libs/mySql.sequelize.js';

export class UserService {
  async findByEmail(email) {
    const userFind = await sequelize.models.User.findOne({
      where: { email },
    });
    if (userFind) return userFind;
    return null;
  }
}
