import './utils/auth/index'
import { join } from "path";
import userRoutes from './routes/user.routes'
import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import session from 'express-session';
import { configutations } from './config/app.config';
import { createClient } from 'redis'
import { RedisStore } from 'connect-redis'
import passport from 'passport';


export const app: Application = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

console.log(configutations.redisUrl);


const redisClient = createClient({
  url: configutations.redisUrl as string
})

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

redisClient.connect().catch((err) => console.error('Failed to connect to Redis:', err));

app.use(session({
  secret: configutations.jwtSecret as string,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  },
  name: 'sessionId',
  store: new RedisStore({ client: redisClient })
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/api', userRoutes)


// app.set('view engine', 'ejs');
// app.set('views', join(__dirname, 'views'));


// app.get('/', (req: Request, res: Response) => {
//   res.render('pages/index', { title: 'Express', user: 'Kevin' })
// })

// app.get('/about', (req: Request, res: Response) => {
//   res.render('pages/about', { title: 'Express', user: 'Kevin' })
// })

// // app.get('/view/login', (req: Request, res: Response) => {
// //   res.render('pages/login', { title: 'Express', user: 'Kevin' })
// // })

// app.get('/profile', (req, res) => {
//   res.render('profile', {
//     name: 'Kevin',
//     age: 25,
//     hobbies: ['Programar', 'Leer', 'Jugar']
//   });
// });
