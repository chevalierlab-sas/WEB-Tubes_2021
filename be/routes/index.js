import express from "express";
import { getUsers, Register, Login, Logout } from "../constrollers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../constrollers/RefreshToken.js";

const router = express.Router();

//Group Router to Login, register, and Logout
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;