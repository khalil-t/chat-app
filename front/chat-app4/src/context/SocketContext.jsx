
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
if(Auth&& Auth._id){
const socket = io(import.meta.env.VITE_USERS_BACKEND , {
query : {
    userId:Auth._id

},
transports: ["websocket", "polling"], 

})
setSocket(socket)

//console.log(Auth)
socket.on("getOnlineUsers", (user)=>{

    setOnlineUsers(user)
    console.log( OnlineUsers)

})
return () => socket.close();
}
else{
	if (socket) {
        socket.close();
        setSocket(null);
    }
}
},[Auth])
useEffect(() => {
    console.log("Updated Online Users:", OnlineUsers);
}, [OnlineUsers]);
return <SocketContext.Provider value={{socket ,OnlineUsers}}>{children}</SocketContext.Provider>
}

