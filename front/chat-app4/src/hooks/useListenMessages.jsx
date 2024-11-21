import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";


const useListenMessages =()=>{

    const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

    useEffect(()=>{
socket.on("newMessage",(newmessage)=>{



    setMessages([...messages,newmessage])
});


return () => socket?.off("newMessage");
    },[socket, setMessages, messages])


}

/*
send message : message input call for message controllers and send getReceiverSocketId with reciverid to get his
socketid in socket.js 
in uselisten we use socket.on to listen to new message and set messages to new message 



*/


