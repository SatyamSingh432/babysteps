import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoutes.js";
import milestoneRoutes from "./routes/milestoneRoutes.js";
import tipRoutes from "./routes/tipRoutes.js";

const app = express();
dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/api", authRoute);
app.use("/api/tips", tipRoutes);
app.use("/api/milestones", milestoneRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mongodb Connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
  });
});
