import { Request, Response, Router } from "express";

const router = Router();
router.get('/', (req: Request, res: Response) => {
  res.render('pages/index', { title: 'Express', user: 'Kevin' })
})

router.get('/about', (req: Request, res: Response) => {
  res.render('pages/about', { title: 'Express', user: 'Kevin' })
})
router.get('/view/login', (req: Request, res: Response) => {
  res.render('pages/login', { title: 'Express', user: 'Kevin' })
})
router.get('/profile', (req: Request, res: Response) => {
  res.render('profile', {
    name: 'Kevin',
    age: 25,
    hobbies: ['Programar', 'Leer', 'Jugar']
  });
});

export default router;
