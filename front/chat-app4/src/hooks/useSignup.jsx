import React from 'react';
import { useAuthUser } from '../context/AuthContext.jsx';

const useSignup = () => {
  const { setAuth } = useAuthUser();

  const Signup = async (input) => {
    try {
      const { fullname, username, password, confirmPassword, gender } = input;

      const response = await fetch(import.meta.env.VITE_SIGNUP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include', // Enable credentials to store cookies
        body: JSON.stringify({ fullname, username, password, confirmPassword, gender }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();
      setAuth(data);

      // Store user data in localStorage
      localStorage.setItem('chat-user', JSON.stringify(data));
    } catch (error) {
      console.log("Error in Signup:", error.message);
    }
  };

  return { Signup };
};

export default useSignup;
