
import React from "react";
import { createContext, useContext, useState } from "react";
import { useEffect } from 'react';


export const AuthUserContext  = createContext()

  

export const useAuthUser =()=>{
return useContext(AuthUserContext )
}


export const AuthUserProvider =({children})=>{
const [Auth, setAuth]=useState(JSON.parse(localStorage.getItem('chat-user')) || null)


return(

<AuthUserContext.Provider value={{Auth, setAuth}}>
{children}

</AuthUserContext.Provider>

)

}