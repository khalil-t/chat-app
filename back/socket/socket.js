
//userof the socket 
//connect inside it 
//recupere l userid
//add it to usersocket map
//emit online users
//diconnect

import { Server } from "socket.io";
import http from "http";
import express from "express";

const app =express()
const server = http.createServer(app);

const io = new Server(server,{
cors:{

    origin: [""],
    methods: ["GET", "POST"],
}
});
const SocketMap={}

io.on("connection",(socket)=>{
console.log(`the socket id ${socket.id}`)

const UserId= socket.handshake.query.userId;

 if(UserId!="undefined") SocketMap[UserId] = socket.id


socket.emit("getOnlineUsers", Object.keys(SocketMap) )

socket.on('disconnected',()=>{
    console.log(`User diconnected`)
delete SocketMap[UserId];
io.emit("getOnlineusers", Object.keys(SocketMap))

})
})
return {app ,io , socket}