import Milestones from "../models/Milestone.js";

export const createMilestone = async (req, res) => {
  try {
    const { title, date, note } = req.body;
    const milestone = await Milestones.create({
      userId: req.user.id,
      title,
      date,
      note,
    });
    res.status(201).json(milestone);
  } catch (err) {
    res.status(500).json({ error: "Error creating milestone." });
  }
};
