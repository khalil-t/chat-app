import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/user.routes.js';
import connectToMongoDB  from './db/connectToMongoDB.js'
import messageRoutes  from './routes/message.routes.js'
import cookieParser from 'cookie-parser';
import allUsers from "../back/routes/auth.routes.js"
import { server,app } from './socket/socket.js';
dotenv.config(); 

connectToMongoDB()
app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/', router);
app.use('/', messageRoutes )
app.use('/', allUsers )

const port = process.env.PORT || 7000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
