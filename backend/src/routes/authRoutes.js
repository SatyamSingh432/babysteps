import express from "express";
import { login, register, verifyUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/verify", verifyUser);

export default router;
