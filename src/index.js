import { app } from './app.js';
import { configutations } from './config/app.config.js';

const port = configutations.port
app.listen(port, (err)=>{
  try {
    console.log('server is running on port ', port)
  } catch (error) {
    console.log(error)
  }
});
