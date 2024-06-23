import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";
const protectRoute=async (req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized - No token provided"})
        }
        const decoded=jwt.verify(token,"sYxjmhAnShXdM1y1+Pe92syln17EfVHz8mVtvKcx3bU=");

        if(!decoded){
            return res.status(401).json({error:"Unauthorized - Invalid Token"});
        }
        const user=await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({error:"User Not Found"});
        }
        req.user=user;
        next();
    }
    catch (error){
        console.log("error in protecting route middleware:",error.message);
        res.status(500).json({error:"internal server error"});
    }
}
export default protectRoute;