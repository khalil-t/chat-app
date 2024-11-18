
import {React} from "react";
import { createContext, useContext, useState } from "react";
import { useEffect } from 'react';
import { AuthUserContext } from "./AuthContext";
const SocketContext = useContext()

export const SocketContextProvider =({children})=>{

const [socket , setSocket]=useState(null)
const [OnlineUsers, setOnlineUsers]=useState([])
const {Auth}= AuthUserContext()
useEffect(()=>{

if(Auth){
const socket = io( "", {
query : {
    userId: Auth._id
}

})

socket.on("getOnlineusers", (user)=>{
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

