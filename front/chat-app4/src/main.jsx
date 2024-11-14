import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import {AuthUserProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
 <AuthUserProvider >
    <App />
    </AuthUserProvider >
    </BrowserRouter>
  </StrictMode>,
)
