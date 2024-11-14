import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useConversation from "../../zustand/useConversation.jsx";
import useSendMessage from "../../hooks/useSendMessage.jsx";

const MessageInput = () => {

const [message , setMessage] = useState("")
const {sendMessage} =useSendMessage()
const {messages , setMessages }= useConversation()
const handleSubmit=async(e)=>{
	e.preventDefault();

try{
	if (!message) return;
	await sendMessage(message);
	setMessage("");
	setMessages(message)
	console.log(messages)
}
catch(error){      console.log("Error sending message:", error); 
}
}
	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e)=>{setMessage(e.target.value)}}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' >
				<BsSend />
				</button>
			</div>
		</form>
	);
};
export default MessageInput;