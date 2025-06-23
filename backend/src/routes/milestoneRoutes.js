import express from "express";
import {
  createMilestone,
  getUserMilestones,
} from "../controllers/milestoneController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, createMilestone);
router.get("/", authenticateToken, getUserMilestones);

export default router;
