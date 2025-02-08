import { UserDto } from '../controllers/user.controller';
import { User } from '../db/models/user.model';
import { sequelize } from '../libs/mySql.sequelize';

export class UserService {
  async findByEmail(email: string) {
    const userFind = await sequelize.models.User.findOne({
      where: { email },
    });
    if (userFind) return userFind;
    return null;
  }

  async getProfile(id: number, email: string) {
    const user = await sequelize.models.User.findOne({
      where: { id, email },
    });
    if (user) return user;
    return null;
  }

  async getById(id: number) {
    const userFind = await sequelize.models.User.findOne({
      where: { id },
    });
    if (userFind) return userFind;
    return null;
  }

  async create(data: User) {
    const newUser = await sequelize.models.User.create({ ...data });
    return newUser;
  }
}
