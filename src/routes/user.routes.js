import { Router } from 'express';
import { createUserSchema } from '../schemas/user.schema.js';
import passport from 'passport';
import {
  createUser,
  findAll,
  deleteUser,
} from '../controllers/user.controller.js';
import { validateSchema } from '../middlewares/validate.schema.middleware.js';
// import { checkApyKey } from '../middlewares/auth.handler.js';
const router = Router();

router.post(
  '/user',
  // checkApyKey,
  validateSchema(createUserSchema, 'body'),
  createUser
);
router.get('/user', passport.authenticate('jwt', { session: false }), findAll);

router.delete('/user/:id', deleteUser);

export default router;
