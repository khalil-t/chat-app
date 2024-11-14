import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages.jsx";

const Messages = () => {
    const { messages } = useGetMessages(); // Ensure you get messages array
    console.log(messages);

    if (!Array.isArray(messages.messages)) {
        return <p>No messages available.</p>; // Handle the case when messages isn't an array
    }

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {messages.messages.length > 0 ? (
                messages.messages.map((message) => (
                    <div key={message.id}>
                        <Message message={message} />
                    </div>
                ))
            ) : (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
        </div>
    );
};

export default Messages;
