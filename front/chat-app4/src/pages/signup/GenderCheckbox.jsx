const GenderCheckbox = ({input ,  checkbox}) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  `}>
					<span className='label-text'>Male</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked = {input === "male"}
						onChange={()=>{checkbox("male")}}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer `}>
					<span className='label-text'>Female</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked = {input=== "female"}
						onChange={()=>{checkbox("female")}}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;

