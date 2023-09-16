import { Router } from 'express';
import passport from 'passport';
import { generateToken } from '../libs/jwt.js';
const router = Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        user: user.name,
      };
      const token = await generateToken(payload);
      res.cookie('token', token, { httpOnly: true });
      res.json(user);
    } catch (error) {}
  }
);

export default router;
