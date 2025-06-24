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

export const getUserMilestones = async (req, res) => {
  try {
    const milestones = await Milestones.find({ userId: req.user.id });
    console.log(milestones);

    res.json(milestones);
  } catch {
    res.status(500).json({ error: "Error fetching milestones." });
  }
};

export const updateMilestone = async (req, res) => {
  try {
    const updated = await Milestones.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch {
    res.status(500).json({ error: "Error updating milestone." });
  }
};

export const deleteMilestone = async (req, res) => {
  try {
    const deleted = await Milestones.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Milestone deleted" });
  } catch {
    res.status(500).json({ error: "Error deleting milestone." });
  }
};
