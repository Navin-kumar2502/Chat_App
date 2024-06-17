import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import connectToMongoDB from "../DB/connecttomongodb.js";

const app=express();
const PORT =process.env.PORT|| 5000;


dotenv.config();


app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes); 
app.use('/api/messages', messageRoutes); 
app.use('/api/users',userRoutes); 

// app.get("/",(req,res)=>{
//     res.send("Hello world!!");
// })
// we will use middlewear so that for every rooute we have no to write individually and its looks ugly
// app.get("/api/auth/signup",(req,res)=>{
//     console.log("signup route");
// })
// app.get("/api/auth/slogin",(req,res)=>{ 
//     console.log("login route");
// })
// app.get("/api/auth/logout",(req,res)=>{
//     console.log("logout route");
// })
 
app.listen(PORT,()=> {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
});