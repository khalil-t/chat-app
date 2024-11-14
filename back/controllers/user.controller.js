//route with protect
//
import User from "../model/user.model.js";

export const sidbareUsers =async(req,res)=>{

try{

    const sidbare=  await User.find().select("-password");

    res.status(200).json(sidbare)
}
catch(error){

res.status(500).json(error.message)
}
}