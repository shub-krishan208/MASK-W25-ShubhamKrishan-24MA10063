# Mask Selection Task

## About me:

```bash
name: Shubham Krishan
roll: 24MA10063
discord: shub.krishan208
MAL: shub-krishan208
Anilist: N/A
description: tech nerd who is fascinated by tech everywhere he goes, then comes my obsession with the world of anime. Imagine skipping classes just to read those last 20 chapters of that damn manhwa! Really enjoy AMVs too ... I loved the "MIDDLE OF THE NIGHT" edit for anime mix, cwazy stuff <3
```

### Tech experience:

Recently got into linux and webdev. Enjoying myself since then, I am pretty comfortable with all aspects of full-stack projects. I am appointed as Web Secretary in TSG so I work on such stuff quite frequently. I enjoy bash scripting too (for automating my life).

For, some of my projects checkout my repos for tsg-noticeboard or blockchain project.

## to Run and Test

Run the following command in your termianl.

```bash
git clone https://github.com/shub-krishan208/mask-selection.git
cd backend
# install necessary packages for the back
npm install
npm start

cd mask-selection
# install necessary packages for the frontend
npm install
npm run dev # webapp is running at http://localhost:8080
```

## Auth system with JWT token system built from scratch

This project features a custom, stateless authentication backend built with Node.js and Express. The core feature is a from-scratch implementation of JSON Web Tokens (JWTs), created manually using the built-in `crypto` module to handle token signing and verification, without relying on external libraries like `jsonwebtoken`. User passwords are securely hashed using `crypto.scrypt` and stored in a lightweight SQLite database. The system exposes secure endpoints for user registration, login, and accessing protected data, with CORS correctly configured for frontend communication.
