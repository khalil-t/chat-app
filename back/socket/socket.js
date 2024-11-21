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


const socketMap= {}
export const getreciveSocket=(user)=>{
    return socketMap[user]
    
    }
io.on("connection",(socket)=>{
console.log(`user socket id ${socket.id}`)
const UserId= socket.handshake.query.userId;
if(UserId!= "undefined")socketMap[UserId]=socket.id
io.emit("getOnlineUsers",Object.keys(socketMap))


socket.on("disconnected",()=>{
console.log("disconnected")
delete socketMap[UserId]
io.emit("getOnlineUsers",Object.keys(socketMap))

})
return {app ,io , socket,getreciveSocket}

})


