import express from "express";
import authRoutes from "./authRoutes.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({ origin: ["http://localhost:8080"] }));

app.use(express.json());
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.status(200).send("JWT server is running.");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
