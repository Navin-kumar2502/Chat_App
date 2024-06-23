import User from "../models/usermodel.js";
export const getUsersForSidebar=async(req,res)=>{
    try{
        const loggedInUserId=req.user._id;
        const allUsersExceptMe = await User.find({ _id: { $ne : loggedInUserId } }).select("-password");
        res.status(200).json(allUsersExceptMe);
    }
    catch(error){
        res.status(400).json({error:"Internal Server Error"});
        console.log("error in user controller",error.message);
    }
}