import express from "express";
import { changePassword, getUserProfile, userLogin, userRegister, verifyOtp } from "../controller/user.controller";
const router = express.Router();

router.post("/register" , userRegister);
router.post("/login" , userLogin);
router.post("/verify-otp" , verifyOtp);
router.get("/profile" , getUserProfile);
router.post("/change-password" , changePassword);




export default router;