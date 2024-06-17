import mongoose from "mongoose";
const connectToMongoDB=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://2502navinkumar:i4votaRMFlu1oNMt@cluster0.hsh3usg.mongodb.net/chat_app_db?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected to mongo db");
    }
    catch (error){
        console.log("error connecting to mongo db",error.message)
    }
};export default connectToMongoDB;