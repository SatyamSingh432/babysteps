import express from "express";
import { addTip, getTipsForMilestone } from "../controllers/tipController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateToken, addTip);
router.get("/:milestoneId", authenticateToken, getTipsForMilestone);

export default router;
