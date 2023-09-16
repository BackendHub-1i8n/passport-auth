import { Strategy } from 'passport-local';
import { UserService } from '../../../services/user.service.js';
import bcrypt from 'bcryptjs';
const userService = new UserService();
export const localStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await userService.findByEmail(email);
      if (!user) return done('user unauthorised', false);
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done('user unauthorised', false);
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);
