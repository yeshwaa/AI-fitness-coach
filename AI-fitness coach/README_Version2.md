# AI-Powered Fitness Coach

A web application that uses MoveNet (TensorFlow.js) for real-time posture analysis and rep counting, with personalized workout and diet planning, BMI tracking, and activity logging.

## Tech Stack

- Frontend: HTML, CSS, JavaScript, MoveNet (TensorFlow.js)
- Backend: Node.js, Express.js
- Database: MongoDB
- Additional: Gemini API (for personalized plans, not yet implemented)

## Getting Started

### Backend

- Install dependencies: `npm install`
- Create a `.env` file (see sample in repo)
- Start MongoDB server locally or use a remote URI
- Run backend server: `node server/server.js`

### Frontend

- Open `client/index.html` in a browser

## Features

- Real-time posture detection and rep counting
- User registration and activity logging
- BMI calculation and tracking
- Diet/workout plan endpoints (to be added with Gemini API integration)