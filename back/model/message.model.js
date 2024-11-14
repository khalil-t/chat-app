//messageschema
//senderid
//reciverid
//message
import mongoose from "mongoose"

const Messageschema =new mongoose.Schema(
{
    senderid:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User",

    },
    reciverid:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User",

    },
    message:{
        type: String,
        required:true
    }


}
)
const Message = mongoose.model("Message", Messageschema)
export default Message