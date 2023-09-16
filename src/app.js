import express from "express";
import userRoutes from './routes/user.routes.js'

import loginRoutes from './routes/login.routes.js'
import './utils/auth/index.js'

export const app = express()
app.use(express.json())

app.get('/', (req, res) =>{
  return res.status(200).json({'message': 'hello world express auth'})
})


app.use('/api', userRoutes)
app.use('/api', loginRoutes)
