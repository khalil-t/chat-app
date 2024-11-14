import React from 'react'
import { useEffect, useState } from "react";
import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/emojis.jsx";
import Conversation from './Conversation';
const Conversations = () => {
  const {conversations: conversations}= useGetConversations()
  return (
	<div className='py-2 flex flex-col overflow-auto'>
{
conversations.map((conversations , idx)=>{
	return(
	<Conversation
					key={conversations._id}
					conversation={conversations}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>)

})


}
<span className='loading loading-spinner mx-auto'></span>
    </div>
  )
}

export default Conversations