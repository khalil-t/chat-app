//conversationSchema
//participants
//messages
import mongoose from "mongoose"

const conversationSchema= mongoose.Schema({

  
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],

    }]



})

const Conversation= mongoose.model("conversation",conversationSchema )

export default Conversation