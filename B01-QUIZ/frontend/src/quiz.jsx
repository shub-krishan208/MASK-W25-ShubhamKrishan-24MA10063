import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import jjkImage from "./assets/jjk.jpg";
import narutoImage from "./assets/naruto.jpg";
import steinsImage from "./assets/steins;gate.png";
import demonSlayerImage from "./assets/demonslayer.jpg";
import "./index.css";

export default function Quiz() {
  const { username, userid, fav_anime } = useParams();
  const [timeLeft, setTimeLeft] = useState(600); // 10 min in seconds
  const [score, setScore] = useState(0);

  const [quiz, setQuiz] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); // which option clicked
  const [feedback, setFeedback] = useState(null); // "correct" | "wrong"

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setCurrentIndex(10);
      return;
    }
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQ = quiz[currentIndex];
  const question = currentQ?.question;
  const options = currentQ?.options;
  const [shuffled, setShuffled] = useState([]);
  // Fisher–Yates shuffle
  const shuffleArray = (arr) => {
    if (!arr) return [];
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  useEffect(() => {
    if (options && options.length > 0) {
      setShuffled(shuffleArray(options));
    }
  }, [currentQ]); // Changed dependency to re-shuffle on every new question

  const checkSymbol = async (sym) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/verify/${currentQ._id}?userAnswer=${sym}`
      );
      if (!res.ok) {
        const err = (await res.json()) || "unknown error";
        console.error("Error while checking answer: ", err.message);
        return false;
      }
      const data = await res.json();
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

  const sendScore = async (scr) => {
    try {
      const res = await fetch(`http://localhost:5000/api/score/${userid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score: scr }),
      });
      if (!res.ok) {
        const err = (await res.json()) || "unknown error";
        console.error("Error while updating score: ", err.message);
        return false;
      }
      console.log("Score updated.");
      return;
    } catch (err) {
      console.error("Error updating the score.", err);
    }
  };

  const finalScore = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getscore/${userid}`);
      if (!res.ok) {
        const err = (await res.json()) || "unknown error";
        console.error("Error while getting score: ", err.message);
        return false;
      }
      console.log("Final score: ", score);
      const data = await res.json();
      return data.score;
    } catch (err) {
      console.error("Error fetching score.", err);
    }
  };
  const [final, setFinal] = useState(0);
  useEffect(() => {
    if (currentIndex > 9) {
      const getSetFinal = async () => {
        const ans = await finalScore();
        if (ans !== false) {
          setFinal(ans);
        }
      };
      getSetFinal();
    } else if (currentIndex > 0) {
      // Only send score after the first question is answered
      sendScore(score);
    }
  }, [currentIndex]); // Simplified dependency array

  const bannerImages = {
    jjk: jjkImage,
    naruto: narutoImage,
    "steins;gate": steinsImage,
    demon_slayer: demonSlayerImage,
  };

  const THEME_CLASSES = [
    "theme-jjk",
    "theme-naruto",
    "theme-steinsgate",
    "theme-demon_slayer",
  ];

  // --- THEME MANAGEMENT START ---
  useEffect(() => {
    if (fav_anime) {
      const themeClass = `theme-${fav_anime.replace(";", "")}`;
      // CHANGED: Target the <html> element instead of <body> for better specificity
      const root = document.documentElement;

      root.classList.remove(...THEME_CLASSES);
      root.classList.add(themeClass);

      return () => {
        root.classList.remove(themeClass);
      };
    }
  }, [fav_anime]);
  // --- THEME MANAGEMENT END ---

  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-8 py-6 relative overflow-hidden">
      {/* Banner */}
      <div className="w-full sm:h-50 md:h-70 lg:h-125 rounded-xl overflow-hidden mb-6">
        <img
          src={bannerImages[fav_anime]}
          alt={`${fav_anime} banner`}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dashboard */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          <span className="text-lg sm:text-xl font-semibold text-accent">
            👤 {username}
          </span>
        </div>
        <div className="flex items-center gap-6 text-lg sm:text-xl font-semibold">
          {/* CHANGED: Using `text-secondary` for the timer */}
          <span className="text-secondary">⏱ {formatTime(timeLeft)}</span>
          {/* CHANGED: Using `text-accent` to make the score pop */}
          <span className="text-accent">⭐ {score}</span>
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
          {currentIndex <= 9 && currentQ && `${currentIndex + 1}. ${question}`}
        </h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {currentIndex <= 9 &&
          shuffled?.map((opt) => {
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
              // CHANGED: The default button state now uses the `secondary` color for its border and glow.
              // This makes the `primary` color on hover more impactful.
              btnClass +=
                "bg-card/30 border-secondary/50 shadow-[0_0_10px_hsl(var(--secondary)/0.4)] hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)]";
            }

            return (
              <button
                key={opt._id}
                onClick={() => handleOptionClick(opt.symbol, opt._id)}
                disabled={!!selectedOption}
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
          {/* CHANGED: Using `text-accent` and a pulse animation to make the final score stand out. */}
          <p className="text-2xl sm:text-3xl font-bold">
            ⭐ Your Score:{" "}
            <span className="text-accent animate-pulse">{final}</span>
          </p>

          <div className="flex gap-4 mt-4">
            {/* CHANGED: This is now styled as the primary action button. */}
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold 
               hover:scale-105 shadow-md transition-transform duration-200"
            >
              ➰ Play Again
            </button>

            {/* CHANGED: This is now styled as the secondary action button. */}
            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-3 rounded-xl border-2 border-secondary text-secondary font-semibold 
               hover:bg-secondary hover:text-secondary-foreground shadow-md 
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
