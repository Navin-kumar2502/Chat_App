import User from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import generateTokenandCookies from "../utils/generatetoken.js";
export const signup= async (req,res)=>{
    try{
        const { fullname , username , password , confirmpassword , gender}=req.body;
        if(password!==confirmpassword){
            return res.status(400).json({error:"password do not match"});
        }
        const user=await User.findOne({username});
        if(user){
            return res.status(400).json({error:"Username already exists"});
        }
        // Hashing  if pass
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        //we apply arandom profile pic through a api call
        // https://avatar-placeholder.iran.liara.run/document
        const boyprofilepic=`https://avatar.iran.liara.run/public/boy?username=Scott`;
        const girlprofilepic=`https://avatar.iran.liara.run/public/girl?username=Maria`;
        const newUser=new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic:gender==="male"? boyprofilepic:girlprofilepic,
        });
        if(newUser){
            //generate JWT token
            generateTokenandCookies(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        }
        else{
            res.status(400).json({error:"Invalid user data"});
        }
    }
    catch(error){
        console.log("error in signup controller",error.message);
        res.status(500).json({error:"internal server error"});
    }
};
export const login= async (req,res)=>{
    //console.log("login User");
    try{ 
        const {username,password}=req.body;
        const user=await User.findOne({username});
        const isPasswordCorrect=await bcrypt.compare(password,user?.password || "");
        if(!user|| !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"});
        }
        generateTokenandCookies(user._id,res);
        res.status(201).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic,
        });
    }
    catch(error){
        console.log("error in login controller",error.message);
        res.status(500).json({error:"internal server error"});
    }
    //res.send("login user");
};
export const logout= (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"logged out succesfully"});
    }
    catch{
        console.log("error in logout controller",error.message);
        res.status(500).json({error:"internal server error"});
    }
    // console.log("logout User");
    // res.send("logout user");
};