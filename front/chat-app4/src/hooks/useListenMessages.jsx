import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages =()=>{
   // console.log("newmessage")
    const { socket } = useSocketContext();
	const { messages, setMessages ,selectedConversation} = useConversation();
    useEffect(()=>{
        if (!socket) return; 
        socket.on("newMessage", (newmessage) => {
          
          const currentMessages = Array.isArray(messages.messages) ? messages.messages : [];
<<<<<<< HEAD
          console.log(currentMessages)
=======
>>>>>>> 250239e (fix message component)
          const updatedMessages = [...currentMessages, newmessage];
          setMessages(updatedMessages);
                
      });
return () => socket?.off("newMessage");
    },[socket, setMessages, messages])
}

export default useListenMessages;


