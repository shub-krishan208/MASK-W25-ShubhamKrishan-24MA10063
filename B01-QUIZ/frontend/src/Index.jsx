import React, { useState } from "react";
import Quiz from "./quiz";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [formData, setFormData] = useState({
    username: "",
    fav_anime: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send the info to the backend

    try {
      const res = await fetch("http://localhost:5000/api/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          fav_anime: formData.fav_anime,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json(); // assuming backend sends JSON
      console.log(
        `Success, user ${username} created with user_id: ${data.userid}`
      );
      navigate(`/quiz/${formData.username}/${formData.fav_anime}`);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }

    // check if the user has been created, from the response from the backend
    // make a localstorage object to check if the user is created ... only activate teh quiz if the proper object6 is created.
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  sm:px-6 md:px-10 py-8 bg-background relative overflow-hidden">
      {/* Neon floating shapes */}
      <div className="absolute top-10 left-8 md:left-20 w-24 h-24 sm:w-40 sm:h-40 bg-otaku-blue/30 rounded-full animate-[float_6s_ease-in-out_infinite] blur-xl sm:blur-2xl"></div>
      <div className="absolute bottom-16 right-8 md:right-20 w-28 h-28 sm:w-52 sm:h-52 bg-otaku-purple/25 rounded-full animate-[float_8s_ease-in-out_infinite] blur-xl sm:blur-2xl"></div>

      {/* Hero Section */}
      <div className="text-center space-y-3 sm:space-y-4 z-10 max-w-lg">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-primary drop-shadow-[0_0_3px_hsl(var(--primary))]">
          🎌 Anime Quiz Hub 🎌
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
          Test your anime knowledge, join the otaku squad, and climb the
          leaderboard!
        </p>
      </div>

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 sm:mt-12 bg-card/20 backdrop-blur-xl rounded-2xl shadow-[0_0_5px_hsl(var(--primary)/0.5)] p-6 sm:p-8 w-full max-w-sm sm:max-w-md space-y-6 border border-primary/40 z-10"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-primary">
          Register to Play 🚀
        </h2>

        <div className="space-y-4">
          {/* Username */}
          <div>
            <label
              className="block text-sm font-medium mb-1 text-foreground/80 text-left"
              htmlFor="username"
            >
              Player Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Your name ..."
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-primary/40 bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-primary/60"
              required
            />
          </div>

          {/* Fav Anime */}
          <div>
            <label
              className="block text-sm font-medium mb-1 text-foreground/80 text-left"
              htmlFor="fav_anime"
            >
              Favorite Anime
            </label>
            <select
              id="fav_anime"
              name="fav_anime"
              value={formData.fav_anime}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-primary/40 bg-background text-foreground focus:ring-2 focus:ring-primary/60"
              required
            >
              <option value="" disabled>
                Select your favorite anime
              </option>
              <option value="jjk">Jujutsu Kaisen</option>
              <option value="naruto">Naruto</option>
              <option value="steins;gate">Steins;Gate</option>
              <option value="demon_slayer">Demon Slayer</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-sm font-medium mb-1 text-foreground/80 text-left"
              htmlFor="email"
            >
              Email (optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@anime.com"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-primary/40 bg-background text-foreground placeholder:text-foreground/50 focus:ring-2 focus:ring-primary/60"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 sm:py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-base sm:text-lg shadow-[0_0_15px_hsl(var(--primary)/0.8)] hover:scale-105 transition-transform"
        >
          Start Quiz 🎮
        </button>
      </form>
    </div>
  );
}
