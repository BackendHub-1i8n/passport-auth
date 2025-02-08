import { Router } from 'express';
import { createUserSchema, loginUserSchema } from '../schemas/user.schema';
import passport from 'passport';
import {
  createUser,
  findAll,
  deleteUser,
  login,
  profile,
  logout
} from '../controllers/user.controller';
import { validateSchema } from '../middlewares/validate.schema.middleware';


const router = Router();

router.post(
  '/login',
  validateSchema(loginUserSchema, 'body'),
  passport.authenticate('local', { session: true, failureRedirect: '/login' }),
  login
);

router.post(
  '/register',
  // checkApyKey,
  validateSchema(createUserSchema, 'body'),
  createUser
);
router.get('/user', passport.authenticate('jwt', { session: true }), findAll);
router.get('/profile', passport.authenticate('jwt', { session: true }), profile);

router.post('/logout', passport.authenticate('jwt', { session: true }), logout)

router.delete('/user/:id', deleteUser);

export default router;
