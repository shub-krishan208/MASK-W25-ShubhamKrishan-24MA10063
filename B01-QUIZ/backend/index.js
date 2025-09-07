import { mongoose } from "mongoose";
import e from "express";
import cors from "cors";
import {
  populateDemonSlayer,
  populateJJKQuestions,
  populateNaruto,
  populateSteinsGate,
} from "./quiz_init.js";
import r from "./router.js";

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

// populate the database first before opening to listening to the frontend:
async function makeQuiz() {
  console.log("Starting to populate the database ...");
  await populateJJKQuestions();
  await populateNaruto();
  await populateSteinsGate();
  await populateDemonSlayer();

  console.log(
    "Setting up the database is completed ... ready to accept requests."
  );
}

await makeQuiz();

app.use("/api", r);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
