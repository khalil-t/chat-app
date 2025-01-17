
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
const socket = io( "http://localhost:7000", {
query : {
    userId:Auth._id

},
transports: ["websocket", "polling"], 

})
setSocket(socket)

//console.log(Auth)
socket.on("getOnlineUsers", (user)=>{
    setOnlineUsers(user)
})
//console.log(OnlineUsers)

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

