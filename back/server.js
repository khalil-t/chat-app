import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/user.routes.js';
import connectToMongoDB  from './db/connectToMongoDB.js'
import messageRoutes  from './routes/message.routes.js'
import cookieParser from 'cookie-parser';
import allUsers from "../back/routes/auth.routes.js"
dotenv.config(); 
const app = express();
connectToMongoDB()
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN, // Or your frontend origin
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/', router);
app.use('/', messageRoutes )
app.use('/', allUsers )

const port =  7000
//process.env.PORT ||
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
//import server and app from socket and change app with server