import { useEffect, useState } from "react";
import useConversation from '../zustand/useConversation.jsx';

const useGetMessages = () => {
    const {messages, setMessages, selectedConversation } = useConversation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMessages = async () => {
          
			setLoading(true);

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
              //  console.log(data)
            } catch (error) {
                console.log(error); 
            }finally {
				setLoading(false);
			}
        };

        if (selectedConversation?._id) getMessages();
        }, [selectedConversation?._id, setMessages]);

  
    return { messages: messages || [], loading };
};

export default useGetMessages;
