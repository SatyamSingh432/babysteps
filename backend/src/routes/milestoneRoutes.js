import express from "express";
import { createMilestone } from "../controllers/milestoneController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, createMilestone);

export default router;
