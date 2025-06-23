import Tips from "../models/Tip.js";

export const addTip = async (req, res) => {
  try {
    const { milestoneId, content } = req.body;
    const tip = await Tips.create({
      milestoneId,
      userId: req.user.id,
      content,
    });
    res.status(201).json(tip);
  } catch {
    res.status(500).json({ error: "Error adding tip." });
  }
};

export const getTipsForMilestone = async (req, res) => {
  try {
    const tips = await Tips.find({ milestoneId: req.params.milestoneId });
    res.json(tips);
  } catch {
    res.status(500).json({ error: "Error fetching tips." });
  }
};
