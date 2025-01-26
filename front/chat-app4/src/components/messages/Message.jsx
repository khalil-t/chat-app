

const Message = ({ message }) => {
	//console.log(message)
    return (
        <div className={`chat`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Sender avatar'  /> 
                </div>
            </div>
            <div className={`chat-bubble text-white pb-2`}>{message.message}</div>  
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
            </div>
        </div>
    );
};

export default Message;