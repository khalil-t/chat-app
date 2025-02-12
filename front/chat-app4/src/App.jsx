import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter,Navigate , Link } from 'react-router-dom';
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp";
import { useAuthUser } from "./context/AuthContext";

 
function App() {

  const {Auth}= useAuthUser()
  return (
    <div>
        <Routes>
        <Route path="/" element={Auth !== null?<Home /> : <Navigate to={"/login"} />} /> 

        <Route path="/SignUp" element={Auth ?<Navigate to='/' />:<SignUp />} /> 

        <Route path="/Login" element={Auth ?<Navigate to='/' />:<Login />}/> 

        </Routes> 
    </div>
  );
}

export default App;
/*
import useGetConversations from "../../hooks/useGetConversations"
const Conversations = () => {
  const {Conversations}= useGetConversations()

*/
