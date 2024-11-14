import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.jsx";
const SignUp = () => {
const [input , setInput]=useState(
	{
		fullname: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",


	}


)
const {Signup}=useSignup()

const handlesubmit =async(e)=>{
	e.preventDefault();
await Signup(input)
}
const checkbox =(gender)=>{
	setInput({...input , gender})
}
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handlesubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered  h-10'
							value={input.fullname}
							onChange={(e )=>{ setInput({...input,fullname:e.target.value})}}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full input input-bordered h-10'
							value={input.username}
							onChange={(e )=>{ setInput({...input,username:e.target.value})}}						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={input.password}
							onChange={(e )=>{setInput({...input,password:e.target.value})}}						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={input.confirmPassword}
							onChange={(e )=>{setInput({...input,confirmPassword:e.target.value})}}						/>
					</div>

					<GenderCheckbox input={input.gender} checkbox={checkbox} />

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						href='#'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' >
						dffdf					</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
