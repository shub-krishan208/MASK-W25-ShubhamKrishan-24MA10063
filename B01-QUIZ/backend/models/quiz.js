import mongoose from "mongoose";

// This is your Schema definition
const questionSchema = new mongoose.Schema({
  animeName: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
    unique: true, // No duplicate questions
  },
  options: {
    type: [String], // Defines an array of strings
    required: true,
    validate: [
      (arr) => arr.length === 4,
      "Question must have exactly 4 options.",
    ],
  },
  answer: {
    type: String,
    required: true,
  },
});

// This creates the "Question" model which is like your table
// MongoDB will automatically create a collection named "questions" (plural and lowercase)
export default mongoose.model("Question", questionSchema);
