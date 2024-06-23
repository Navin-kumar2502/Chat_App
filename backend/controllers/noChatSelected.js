import User from "../models/usermodel.js";
export const getUsernameForNoChatSelected=async(req,res)=>{
    try{
        res.status(200).json(loggedInUsername);
    }
    catch(error){
        res.status(400).json({error:"Internal Server Error"});
        console.log("error in user controller",error.message);
    }
}