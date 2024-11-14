const Message = ({ message }) => {
    console.log(message);
    console.log('Message displayed');

    return (
        <div className={`chat`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Sender avatar' src={message.sender?.profilePic} /> {/* Add sender profile picture if available */}
                </div>
            </div>
            <div className={`chat-bubble text-white pb-2`}>{message.message}</div>  {/* Display the message */}
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
                {message.sender?.username}  {/* Display sender's username if available */}
            </div>
        </div>
    );
};

export default Message;
