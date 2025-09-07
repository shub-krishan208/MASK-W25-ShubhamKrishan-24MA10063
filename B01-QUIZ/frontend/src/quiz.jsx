import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Quiz() {
  const { username, fav_anime } = useParams();
  const [timeLeft, setTimeLeft] = useState(600); // 10 min in seconds
  const [score, setScore] = useState(0);

  const [quiz, setQuiz] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); // which option clicked
  const [feedback, setFeedback] = useState(null); // "correct" | "wrong"

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Format mm:ss
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // calling the database to provide the questions
  useEffect(() => {
    async function getQuestion() {
      console.log("Getting questions from the database ...");
      try {
        const res = await fetch(`http://localhost:5000/api/ques/${fav_anime}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          const err = (await res.json()) || "unknown error";
          console.error("Error while fetching questions: ", err.message);
          return;
        }
        const data = await res.json();
        setQuiz(data); // this quiz object is to be used to map teh question.
      } catch (err) {
        console.error("Error sending request to get questions.", err);
      }
    }
    getQuestion();
  }, [fav_anime]);
  useEffect(() => {
    console.log("quiz data: ", quiz);
  }, [quiz]);

  const checkSymbol = async (sym) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/verify/${currentQ._id}?userAnswer=${sym}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        const err = (await res.json()) || "unknown error";
        console.error("Error while checking answer: ", err.message);
        return false;
      }
      const data = await res.json();
      console.log("Verification received: ", data);
      return data.isCorrect;
    } catch (err) {
      console.error("Error verifying the answer.", err);
    }
  };
  const handleOptionClick = async (symbol, optionId) => {
    if (selectedOption) return; // prevent spamming clicks

    setSelectedOption(optionId);
    const isCorrect = await checkSymbol(symbol);

    if (isCorrect) {
      setScore((s) => s + 10);
      setFeedback("correct");
    } else {
      setScore((s) => s - 5);
      setFeedback("wrong");
    }

    // Move to next question after 1.2s
    setTimeout(() => {
      setSelectedOption(null);
      setFeedback(null);
      setCurrentIndex((i) => i + 1);
    }, 1500);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQ = quiz[currentIndex];
  const question = currentQ?.question;
  const options = currentQ?.options;

  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-8 py-6 relative overflow-hidden">
      {/* Banner */}
      <div className="w-full h-40 sm:h-56 md:h-64 rounded-xl overflow-hidden mb-6">
        <img
          src="/placeholder-banner.jpg" // replace with fav_anime-specific banner
          alt={`${fav_anime} banner`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dashboard */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          <span className="text-lg sm:text-xl font-semibold text-primary">
            👤 {username}
          </span>
        </div>
        <div className="flex items-center gap-6 text-lg sm:text-xl font-semibold">
          <span className="text-primary">⏱ {formatTime(timeLeft)}</span>
          <span className="text-primary">⭐ {score}</span>
          <Link
            to="/"
            className="text-lg sm:text-xl font-semibold text-primary hover:underline"
          >
            ❌ Quit
          </Link>
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          {currentIndex <= 9 && `${currentIndex + 1}. ${question}`}
        </h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {currentIndex <= 9 &&
          options?.map((opt) => {
            // determine button style
            let btnClass =
              "w-full px-4 py-3 rounded-xl border transition-all font-medium text-left backdrop-blur-md ";

            if (selectedOption === opt._id) {
              if (feedback === "correct") {
                btnClass +=
                  "bg-green-500 text-white border-green-600 shadow-[0_0_15px_rgba(34,197,94,0.8)]";
              } else if (feedback === "wrong") {
                btnClass +=
                  "bg-red-500 text-white border-red-600 shadow-[0_0_15px_rgba(239,68,68,0.8)]";
              }
            } else {
              // default + hover
              btnClass +=
                "bg-card/30 border-primary/40 shadow-[0_0_10px_hsl(var(--primary)/0.4)] hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)]";
            }

            return (
              <button
                key={opt._id}
                onClick={() => handleOptionClick(opt.symbol, opt._id)}
                disabled={!!selectedOption} // disable clicks until next q
                className={btnClass}
              >
                {opt.text}
              </button>
            );
          })}
      </div>

      {/* End Screen */}
      {currentIndex > 9 && (
        <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-lg mx-auto bg-card/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-primary/40">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            🎉 Quiz Finished!
          </h2>
          <p className="text-lg sm:text-xl">
            Thanks for playing,{" "}
            <span className="font-semibold">{username}</span>!
          </p>
          <p className="text-2xl sm:text-3xl font-bold">
            ⭐ Your Score: <span className="text-primary">{score}</span>
          </p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold 
             hover:bg-primary hover:text-primary-foreground shadow-md 
             transition-colors duration-200"
            >
              ➰ Play Again
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold 
             hover:bg-primary hover:text-primary-foreground shadow-md 
             transition-colors duration-200"
            >
              🏠 Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
