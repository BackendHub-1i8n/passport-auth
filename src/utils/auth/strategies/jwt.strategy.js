import { Strategy, ExtractJwt } from 'passport-jwt';
import { configutations } from '../../../config/app.config.js';

const jwtSecret = configutations.jwtSecret;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

export const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});
