import { useEffect } from "react";
import useConversation from '../zustand/useConversation.jsx';

const useGetMessages = () => {
    const {messages, setMessages, selectedConversation } = useConversation();
    console.log(messages)
    useEffect(() => {
        const getMessages = async () => {
          

            try {
                const res = await fetch(`${import.meta.env.VITE_RECEIVE_MESSAGES_URL}/${selectedConversation._id}`, {
                    method: "GET",
                    credentials: 'include',
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch messages');
                }

                const data = await res.json();
                setMessages(data); 
            } catch (error) {
                console.log(error); 
            }
        };

        getMessages(); 
    }, [selectedConversation, setMessages]);

  
    return { messages: messages || [] };
};

export default useGetMessages;
