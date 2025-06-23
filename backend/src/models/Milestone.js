import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    note: { type: String },
  },
  { timestamps: true }
);

const Milestones = mongoose.model("Milestones", milestoneSchema);

export default Milestones;
