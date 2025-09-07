import { Router } from "express";
import {
  fetchQuestionByAnime,
  getScore,
  makeUser,
  updateUser,
  verifyQuestion,
} from "./controller";

const r = Router();

/* the endpoints planned,
 * /:anime/ques/:id -> for fetching the question from its id. (GET)
 * /verify/:id -> verify question id (GET)
 * /score/:user -> changes the suer score in the backend (POST)
 * /new -> makes a new user entry (POST)
 */

r.get("/:anime/ques/:anime", fetchQuestionByAnime);
r.get("/verify/:ques_id", verifyQuestion); // exmaple GET request url /verify/ques_id?userAnswer=a
r.get("/getscore/:id", getScore);
r.post("/score/:user", updateUser);
r.post("/new", makeUser);
