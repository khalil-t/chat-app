
import {React} from "react";
import { createContext, useContext, useState } from "react";
import { useEffect } from 'react';
import { useAuthUser } from "./AuthContext";
import { io } from "socket.io-client";

const SocketContext = createContext()
export const useSocketContext=()=>{
    return useContext(SocketContext)
}
export const SocketContextProvider =({children})=>{
const [socket , setSocket]=useState(null);
const [OnlineUsers, setOnlineUsers]=useState([]);
const {Auth}= useAuthUser();
useEffect(()=>{
if(Auth){
const socket = io( "", {
query : {
    userId: Auth._id
}
})
socket.on("getOnlineUsers", (user)=>{
    setOnlineUsers(user)
})
setSocket(socket)
return ()=>{socket.close()}
}
else{
	if (socket) {
        socket.close();
        setSocket(null);
    }
}
},[Auth])
return <SocketContext.Provider value={{socket ,OnlineUsers}}>{children}</SocketContext.Provider>
}

