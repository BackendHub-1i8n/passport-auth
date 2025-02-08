import { app } from './app';
import { configutations } from './config/app.config';

const port = configutations.port
app.listen(port, (err)=>{
  try {
    console.log('server is running on port ', port)
    console.log(`url http://localhost:${port}`);

  } catch (error) {
    console.log(error)
  }
});
