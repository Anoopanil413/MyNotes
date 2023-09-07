import  express  from "express";
import dotenv from 'dotenv';

import cors from 'cors';
import connectDb from "./src/Config/dbConfig.js";

import noteRouter from './src/routes/noteRoutes.js'

import cookieParser from "cookie-parser";





dotenv.config();



const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({extended: true}))

app.use(express.json());



app.use(cors());

app.use('/user',noteRouter)

const dbURL = process.env.MongoDB_URL
const port = process.env.PORT



const appEndPoint = async(dbURL)=>{
    try {
        await connectDb(dbURL)
        app.listen(port,()=>console.log('App connected to db and listening at port  '))
        
    } catch (error) {
        console.log(error)

    }
}


appEndPoint(dbURL)