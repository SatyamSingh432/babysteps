import express from "express";
import {
  createMilestone,
  getUserMilestones,
  updateMilestone,
  deleteMilestone,
} from "../controllers/milestoneController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, createMilestone);
router.get("/", authenticateToken, getUserMilestones);
router.put("/:id", authenticateToken, updateMilestone);
router.delete("/:id", authenticateToken, deleteMilestone);

export default router;
