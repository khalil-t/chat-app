import React from 'react'
import useConversation from '../zustand/useConversation.jsx'
const useSendMessage = () => {

const {messages , setMessages,selectedConversation}= useConversation();

const sendMessage=async(message)=>{
try{
const res= await fetch(`${import.meta.env.VITE_SEND_MESSAGE_URL}/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
				credentials: 'include' 

			})
const data= await res.json()
 console.log(data.newmassage )

// console.log(messages.messages )
//console.log(messages.messages.messages)

 const currentMessages = Array.isArray(messages.messages) ? messages.messages : []; // Get current messages array
 const updatedMessages = [...currentMessages, data.newmassage];





 setMessages([...currentMessages, data.newmassage])

 // console.log("Messages state after update:", messages);


}
catch(error){

  console.log(error)
}

}

return {sendMessage}
}


export default useSendMessage