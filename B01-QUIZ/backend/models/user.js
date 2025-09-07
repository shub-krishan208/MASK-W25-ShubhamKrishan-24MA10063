import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  fav_anime: {
    type: String,
  },
  // This will store the user's answers for a given quiz session
  // It's an array of objects, which is more descriptive
  answers: [
    {
      questionId: {
        type: mongoose.Schema.ObjectId,
        ref: "Question",
      },
      isCorrect: {
        type: Boolean,
        default: false, // default is false for no answer given
      },
    },
  ],
});

// Creates the "User" model, which will map to a "users" collection in the DB
export default mongoose.model("User", userSchema);
