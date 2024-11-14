

import {useAuthUser} from '../context/AuthContext.jsx'


const useLogout=()=>{

const {setAuth}=useAuthUser()



    const Logout =async()=>{

        try{
        
        const response= await fetch( import.meta.env.VITE_LOGOUT_URL,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
        } )
        if(!response.ok){
            throw new Error('Failed to sign up');
        
        }
        const data = await response.json()
        localStorage.removeItem('chat-user');

        setAuth(null)
        }
        catch(error){
            console.log(error)
        }
        }
        return {Logout}
}

export default useLogout