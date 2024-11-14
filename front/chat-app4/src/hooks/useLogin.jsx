import React from 'react';
import {useAuthUser} from '../context/AuthContext.jsx'

const LoginComponent = () => {
  const {setAuth}=useAuthUser()

  const Login =async( username, password )=>{

    try{
      const res = await fetch(import.meta.env.VITE_APP_LOGIN_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});
      const data= await res.json()
      setAuth(data)
      localStorage.setItem('chat-user', JSON.stringify(data));
}
catch(error){
  console.log(error)

}

  }
 return {Login}
}

export default LoginComponent;
//take data from login and post and store it in local storage