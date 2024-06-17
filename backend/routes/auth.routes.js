import express from "express";
import {signup,login,logout} from "../controllers/auth.controller.js"
const router=express.Router();
//each of these can also occupy 50-60 lines of code so we also write them  separately and use them with the help of controllerns
router.post("/signup",signup);
router.get("/signup",signup);
router.post("/login",login);
router.get("/login",login);
router.post("/logout",logout);
router.get("/logout",logout);
export default router;