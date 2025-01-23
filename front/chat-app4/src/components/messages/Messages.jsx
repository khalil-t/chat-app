import { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages.jsx";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";

const Messages = () => {
    const { messages, loading } = useGetMessages(); 
console.log(messages)
    useListenMessages();
    if (!Array.isArray(messages.messages)) {
        return <p>No messages available.</p>; 
    }

    return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				
				messages.messages.map((message) => (
					<div key={message._id} >
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages;
//call uselisen messages