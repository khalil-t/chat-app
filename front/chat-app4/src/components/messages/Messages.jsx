import { useEffect } from "react";
import Message from "./Message";
import useConversation from "../../zustand/useConversation";
import MessageSkeleton from "../../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading, fetchMessages, selectedConversation } = useConversation();

  useEffect(() => {
    if (selectedConversation) {
      fetchMessages(selectedConversation._id); // Load messages for the selected conversation
    }
  }, [selectedConversation, fetchMessages]);

  if (!Array.isArray(messages.messages)) {
    return <p>No messages available.</p>;
  }

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.messages.map((message) => (
          <div >
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
