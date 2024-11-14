import React from 'react'
import useConversation from '../zustand/useConversation.jsx'
const useSendMessage = () => {

const {messages , setMessages,selectedConversation}= useConversation();
console.log(messages)

const sendMessage=async(message)=>{
try{
const res= await fetch(`${import.meta.env.VITE_SEND_MESSAGE_URL}/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
				credentials: 'include' // Include credentials to send cookies

			})
const data= await res.json()
setMessages([...messages , data])

}
catch(error){

  console.log(error)
}

}

return {sendMessage}
}


export default useSendMessage