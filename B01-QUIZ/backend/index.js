import { mongoose } from "mongoose";
import Question from "./models/quiz.js";
import User from "./models/user.js";
import e from "express";
import cors from "cors";

const app = e();
const PORT = 5000;

app.use(e.json());

app.use(cors({ origin: ["http://localhost:5173"] }));

const dbURI =
  "mongodb://salieri:maho8kurisu@localhost:27017/quizApp?authSource=admin";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("✅ Successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
