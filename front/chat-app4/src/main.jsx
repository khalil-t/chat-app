import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { SocketContextProvider } from "./context/SocketContext.jsx";
import App from './App.jsx'
import './index.css'
import {AuthUserProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
 <AuthUserProvider >
 <SocketContextProvider>
    <App />
    </SocketContextProvider>
    </AuthUserProvider >
    </BrowserRouter>
  </StrictMode>,
)
