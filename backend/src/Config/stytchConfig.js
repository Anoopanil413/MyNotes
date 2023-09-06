import { Client, envs } from 'stytch';
import dotenv from 'dotenv';
dotenv.config()




const client = new Client({
    project_id: process.env.stytch_proj_Id,
    secret: process.env.stytch_secret_Id,
    env: envs.test,
  });


 export default client