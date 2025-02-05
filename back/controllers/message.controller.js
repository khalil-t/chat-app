
import conversation from "../model/conversation.model.js"
import Message from "../model/message.model.js"
import User from "../model/user.model.js"
import mongoose from 'mongoose'; 
import Conversation from "../model/conversation.model.js";
import {getreciveSocket ,io} from "../socket/socket.js"
export const sendmessage=async(req,res )=>{
try{
const {id:reciverid}= req.params
const {message}=req.body
const senderid= req.user._id
let conversationsearch= await conversation.findOne({
    participants: { $all: [senderid, reciverid] },
})
    if(!conversationsearch){
        conversationsearch = await conversation.create({
            participants:  [senderid, reciverid] ,
        })        
    }
    const newmassage = await Message.create({senderid,reciverid ,message })
if(newmassage){
    conversationsearch.messages.push(newmassage._id)
}

await conversationsearch.save()

const reciverId =getreciveSocket(reciverid)
    //console.log(`reciverId : ${newmassage}`)
if(reciverId){
    io.to(reciverId).emit("newMessage", newmassage)
}
res.status(201).send({ message: 'Message sent successfully', newmassage });
}
catch(error){
console.log("Error in contrfffoller", error.message);
res.status(500).json({error: error.message})}
}
export const receivemessage=async(req,res)=>{

    try{
        const { id: reciverid } = req.params;
		const senderid = req.user._id;
        const reciverIdObjectId = new mongoose.Types.ObjectId(reciverid); 


const findconversation = await Conversation.findOne({
    participants: { $all: [senderid , reciverIdObjectId ] },
}).populate("messages")




res.status(200).json(findconversation)







    }

    catch(error){
        console.log("Error in logoust controller", error.message);
        res.status(500).json({error: error.message})}
}




