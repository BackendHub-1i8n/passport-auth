import express from "express";
import "reflect-metadata"

export const app = express()
app.use(express.json())

app.get('/', (req, res) =>{
  return res.status(200).json({'message': 'hello world express auth'})
})

