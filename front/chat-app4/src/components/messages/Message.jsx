import { useAuthUser } from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation.jsx";

const Message = ({ message }) => {
    const { selectedConversation } = useConversation();
    const { Auth } = useAuthUser();

    const isRecipient = Auth._id === message.reciverid; 
console.log(Auth._id === message.reciverid)

   
    const chatClassName = isRecipient ? "chat-end" : "chat-start";
    const bubbleBgColor = isRecipient ? "bg-gray-500" : "bg-blue-500"; // Set background color
    const profilePic = isRecipient ? Auth.profilePic : selectedConversation?.profilePic;

    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="User profile" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
                {message.message}
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center"></div>
        </div>
    );
};

export default Message;
