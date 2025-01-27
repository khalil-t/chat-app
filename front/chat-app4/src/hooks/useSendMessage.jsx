import React from "react";
import useConversation from "../zustand/useConversation.jsx";

const useSendMessage = () => {
  const { messages, setMessages, selectedConversation, fetchMessages } = useConversation();

  const sendMessage = async (message) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SEND_MESSAGE_URL}/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
          credentials: "include",
        }
      );
      const data = await res.json();

      // Add new message to the state
      const currentMessages = Array.isArray(messages.messages) ? messages.messages : [];
      const updatedMessages = [...currentMessages, data.newmassage];
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return { sendMessage };
};

export default useSendMessage;
