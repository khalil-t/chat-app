import { useState } from "react";
import LoginComponent from "../../hooks/useLogin.jsx";
import { Link } from 'react-router-dom';

const Login = () => {
const {Login} =LoginComponent()
	const [logindata , setLogin]= useState({
		username :'' ,
		password :''
	})
const handlelogin =async(e)=>{
	e.preventDefault();
 await Login( logindata.username, logindata.password )

}
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handlelogin}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
						value={logindata.username}
						onChange={(e)=>{setLogin({...logindata ,username:e.target.value})}}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={logindata.Password}
							onChange={(e)=>{setLogin({...logindata ,password:e.target.value})}}
						/>
					</div>
			<Link to="/SignUp">sign up </Link>
					<div>
						<button className='btn btn-block btn-sm mt-2' >
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
