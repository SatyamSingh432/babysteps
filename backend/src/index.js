import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mongodb Connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
  });
});
