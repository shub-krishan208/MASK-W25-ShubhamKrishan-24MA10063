import user from "./models/user.js";
import quiz from "./models/quiz.js";
async function makeUser(req, res) {
  try {
    const { username, fav_anime } = req.body;
    const newUser = new user({
      username: username,
      fav_anime: fav_anime,
    });
    const savedUser = await newUser.save();
    console.log("New user createdP: ", savedUser);
    res
      .status(200)
      .json({ message: "User created succesfully.", userid: savedUser._id });
  } catch (err) {
    console.error("Error making new user: ", err);
    res.status(500).json({ message: "Server error." });
  }
}

async function updateUser(req, res) {
  try {
    const { user: userid } = req.params;
    const { score } = req.body;
    if (typeof score !== "number") {
      res.status(400).json({ message: "Provide a number as score!" });
    }
    const updatedUser = await user.findByIdAndUpdate(
      userid,
      { score: score },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res
      .status(200)
      .json({ message: "Score updated successfully.", user: updatedUser });
  } catch (err) {
    console.error("Error updating score: ", err);
    res
      .status(500)
      .json({ message: "An error occurred while updating the score." });
  }
}

async function getScore(req, res) {
  try {
    const { _id } = req.body;
    const score = await user.findById(_id).score;
    if (!score) {
      console.error("No score found for user with id: ", _id);
      res.status(400).json({ message: "No score found for the user" });
    }
    console.log("User score found: ", score);
    res.status(200).json({ message: "Score found.", score: score });
  } catch (err) {
    console.error("Error while getting scores: ", err);
    req.status(500).json({ message: "Server error." });
  }
}

// quiz related functions\
async function fetchQuestionByAnime(req, res) {
  console.log("Received request to send questions to the frontend ...");
  try {
    const { anime: anime } = req.params;

    // Find 10 random questions that have the anime name given in the parameter.
    // also prevent from sending the answer to any of the questions
    // using aggregate() method to build a pipeline of operations for the above
    const question = await quiz.aggregate([
      { $match: { animeName: anime } },
      { $sample: { size: 10 } },
      { $project: { answer: 0 } },
    ]);

    if (!question || question.length === 0) {
      return res
        .status(404)
        .json({ message: `No questions found for the anime: ${anime}` });
    }
    res.status(200).json(question);
  } catch (err) {
    console.error("Error fetching question:", err);
    res.status(500).json({ message: `server error: ${err}` });
  }
}

/**
 * Verifies a user's submitted answer for a given question ID.
 * @route GET /verify/:id
 */
async function verifyQuestion(req, res) {
  try {
    const { ques_id: ques_id } = req.params;
    // For a GET request, the user's answer should be sent as a query parameter.
    // For example: /verify/12345?userAnswer=itadori
    const { userAnswer } = req.query;

    if (!userAnswer) {
      return res.status(400).json({ message: "No answer was provided." });
    }

    const question = await quiz.findById(ques_id);

    if (!question) {
      return res.status(404).json({ message: "Question not found." });
    }

    const isCorrect = question.answer === userAnswer;

    res.status(200).json({
      isCorrect: isCorrect,
    });
  } catch (err) {
    console.error("Error verifying answer:", err);
    res
      .status(500)
      .json({ message: "An error occurred while verifying the answer." });
  }
}

export { makeUser, updateUser, getScore, fetchQuestionByAnime, verifyQuestion };
