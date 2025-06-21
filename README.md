# Auth Backend API

##  Features
- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Authentication
- MongoDB Integration
- Dockerized

##  Tech Stack
- Node.js, Express.js
- MongoDB & Mongoose
- bcryptjs, jsonwebtoken
- Docker

##  Setup Instructions
```bash
git clone <repo-url>
cd auth-backend
npm install
# Setup .env file with MONGO_URI and JWT_SECRET
npm start
```

##  Sample Test Credentials
- Email: test@example.com
- Password: Test@123

##  API Endpoints
- POST `/api/auth/register`
- POST `/api/auth/login`
