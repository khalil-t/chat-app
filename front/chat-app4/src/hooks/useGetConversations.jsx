 import { useEffect, useState } from "react";


import React from 'react'

const useGetConversations = () => {
  const [conversations ,setConversation]= useState([])

  useEffect(
  ()=>{
const getConversations =async()=>{
try{
const res= await fetch("http://localhost:7000/allusers")
const data= await res.json()
setConversation(data)
}

catch(error){console.log(error)}

}

getConversations ()
  }
    
    
    
    
    
    ,[])

return {conversations}
}

export default useGetConversations