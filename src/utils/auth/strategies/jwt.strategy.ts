import { Strategy, ExtractJwt } from 'passport-jwt';
import { configutations } from '../../../config/app.config';
import { UserService } from '../../../services/user.service';
import passport from 'passport';

const userService = new UserService();
const jwtSecret = configutations.jwtSecret;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

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

export const jwtStrategy = new Strategy(options, async (payload: any, done) => {
  try {
    const { sub, email } = payload;
    const user = await userService.getProfile(sub, email);
    if (!user) return done('user unauthorised', false);

    delete user.dataValues.password;
    done(null, user);
  } catch (error) {
    return done(error, false);
  }
});
