import express from "express";
import authRoutes from "./authRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", authRoutes);
app.get("/", (req, res) => {
  res.status(200).send("JWT server is running.");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
