
import User from "../model/user.model.js"
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../util/generateToken.js"
export const signup =async(req,res)=>{

try{
const{fullname, username, password, confirmPassword, gender}= req.body

if(password != confirmPassword){
    return res.status(400).json({ error: 'Passwords do not match' });
}
const find = await User.findOne({username}) 
if(find){
    console.log('error')
    return res.status(409).json({ error: 'Username already exists' });
}

const girlpic= `https://avatar.iran.liara.run/public/boy?username=${username}`
const boylpic= `https://avatar.iran.liara.run/public/girl?username=${username}`

const salt = await bcrypt.genSalt(10)
const hashed = await bcrypt.hash(password, salt)
const NewUser = new User ({
    fullname, username, password:hashed, gender, profilePic: gender==='male' ? boylpic : girlpic

})
await NewUser.save()

const token = generateTokenAndSetCookie(NewUser._id.toString(),res)


res.status(200).json({
	_id: NewUser._id,
    fullname: NewUser.fullname,
				username: NewUser.username,
				profilePic: NewUser.profilePic,

})

}


catch(error){
    console.error('Signup error:', error);

    res.status(500).json({ error: "this" }) }
}



export const login =async(req,res)=>{
try{    const { username, password } = req.body;
const newuser= await User.findOne({username})
const isMatch = await bcrypt.compare(password , newuser.password)
if(!newuser || !isMatch){
    return res.status(500).json({mess: "error"})
}
generateTokenAndSetCookie(newuser._id, res )

res.status(200).json({
    _id: newuser._id,
    fullname: newuser.fullname,
				username: newuser.username,
				profilePic: newuser.profilePic,


})}

catch(error){
    
    console.log("Error in logout controller", error.message);
    res.status(500).json({error: "error"})}
}


export const logout =async(req, res)=>{
try{
    res.clearCookie("jwt"); 
res.status(200).json({ message: "Logged out successfully" });

}
catch(error){
    console.log("Error in logout controller", error.message);
    res.status(500).json({error: "error"})}



}

export const defaultmessage =(req,res)=>{

    res.json({ message: "Welcome to my API!" });



} 










