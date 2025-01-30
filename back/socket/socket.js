import { Server } from "socket.io";
import http from "http";
import express from "express";

const app =express()
const server = http.createServer(app);

const io = new Server(server,{
cors:{
 
    origin: [process.env.FRONTEND_ORIGIN],
    methods: ["GET", "POST"],
}
});


const socketMap= {}
export const getreciveSocket=(user)=>{
    return socketMap[user]
    
    }
io.on("connection",(socket)=>{
    //console.log(`user connected ${socket.id}`)
const UserId= socket.handshake.query.userId;

if(UserId!= "undefined")socketMap[UserId]=socket.id

//console.log(`socket map ${socketMap[UserId]}`)
io.emit("getOnlineUsers",Object.keys(socketMap))

 socket.on("disconnect",()=>{
console.log("disconnected")

delete socketMap[UserId]

io.emit("getOnlineUsers",Object.keys(socketMap))

})

})
export { app, io, server };
