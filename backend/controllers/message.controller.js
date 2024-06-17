import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage= async(req,res)=>{
    try{
        const {message}= req.body;
        const {id:receiverId}= req.params;
        const senderId= req.user._id;
        let conversaton=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]},
        })
        if(!conversaton){
            conversaton=await Conversation.create({
                participants:[senderId,receiverId],
            })
        }
        const newMessage= new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage){
            conversaton.messages.push(newMessage._id);
        }
        // await conversaton.save();
        // await newMessage.save();
        //optimisation this will run in parallel but in previous it was done one by one so one had to wait
        await Promise.all([conversaton.save(),newMessage.save()]);
        res.status(201).json(newMessage);
    }
    catch(error){
        console.log("error in send message controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
};
export const getMessage=async(req,res)=>{
    try{
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");
        if(!conversation){
            return res.status(200).json([]);
        }
        const messages=conversation.messages;
        res.status(200).json(messages);
    }
    catch (error){
        console.log("error in get message controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}