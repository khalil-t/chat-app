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
//console.log(messages)


return () => socket?.off("newMessage");
    },[socket, setMessages, messages])


}

export default useListenMessages;

