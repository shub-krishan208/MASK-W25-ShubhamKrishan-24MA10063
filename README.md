# Mask Selection Task

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
