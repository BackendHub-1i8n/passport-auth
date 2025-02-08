import { Strategy } from 'passport-local';
import { UserService } from '../../../services/user.service';
import bcrypt from 'bcryptjs';
import passport from 'passport';

const userService = new UserService();

passport.serializeUser((user: any, done: any) => {
  done(null, user.id); // Guarda el ID en la sesión
});

passport.deserializeUser(async (id: number, done: any) => {
  try {
    const user = await userService.getById(id); // Busca el usuario por su ID
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export const localStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await userService.findByEmail(email) as any;
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
