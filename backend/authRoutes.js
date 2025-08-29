import express from "express";
import { hp, compare } from "./password";
import { create } from "./jwt";
import middleware from "./middleware";

const router = express.Router();

// in-memory database
const users = [];

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required." });
  }
  if (users.find((u) => u.username === username)) {
    return res.status(409).json({ message: "User already exists." });
  }
  const hash = await hp(password);
  users.push({ username, password: hash });

  console.log("Users:", users);
  res.status(201).json({ message: "User created successfully." });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials." });
  }
  const isPasswordCorrect = await compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid credentials." });
  }
  const jwttoken = create({ username: user.username });
  res.json({ message: "Login successful!", token: jwttoken });
});

router.get("/check", middleware, (req, res) => {
  res.status(200).json({ message: "Token valid!" });
});

export default router;
