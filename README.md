# Mask Selection Task: Round 2 _B01-QUIZ_

## Goal

Make a **backend** for a quiz system and a minimal **frontend** to showcase it.

- backend servers the questions and validates them. Also, keeps track of scores
- mongodb database
- react frontend to: display questions one by one, accept answers and show current and final score.

### Rules:

- Store the correct answer only in the backend (don’t send it to the frontend).
- API endpoints should be logical.
- The frontend must be clean and responsive.
- Code should be modular and readable.
- Users should not be able to skip ahead without answering.
- Ensure the same question is not served multiple times in a session

## System design:

- backend: node + express
- endpoints: /:anime/ques/:id, /verify/:id, /new and /score/:user
- backend (mongodb):
  - question struct
    - anime name (parent)
    - question (child)
    - option 1 (child)
    - option 2 (child)
    - option 3 (child)
    - option 4 (child)
    - answer (child)
  - user struct:
    - username
    - score
    - fav_anime
    - answer `arr[10]` or 0/1

### User-Story:

The user goes through the following end-to-end process:

1. Registers using a username and favourite anime name(favourite anime from drop-down).
2. The Page theme changes as per the selected anime and questions start pouring in one by one (total 10 questions).
3. The user is shown a score at the top and they can select from the given options (4 options)
4. Lastly, there is a overall summary of the quiz (what they did right and what they did wrong) and final score.
5. Also, there is a retry button (they again have to give a username, the db won't be concerned with unique usernames)

## Todo

1. Need to setup tailwindcss
2. need to make the frontend
