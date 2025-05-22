# Blogging-Platform-Backend


```markdown
# 📝 Blogging Platform – Backend (Node.js + Express + MySQL)

This is the backend API for the blogging platform. It handles user authentication, post management, and ensures proper authorization using JSON Web Tokens (JWT).

---

## 🚀 Features

- User authentication (Signup/Login using JWT)
- CRUD operations for blog posts
- Public API to read all blog posts
- Only the post author can edit/delete their own posts
- Passwords are securely hashed with bcrypt
- CORS enabled for frontend communication

---

## 🧠 My Approach

- Used Express Router for modular API endpoints
- Added middleware to verify JWT for protected routes
- Normalized MySQL database with proper relations
- Used environment variables for sensitive configs
- Error handling with proper status codes and messages

---

## 🛠 Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MySQL** – Relational database
- **Sequelize** – ORM for MySQL
- **JWT** – Authentication token system
- **bcrypt** – Password hashing
- **dotenv** – Environment configuration

---

## 🤖 AI Tools Used

- **ChatGPT** – use of Sequelize models, create .gitignore
- **Postman AI Assist** – For API testing

---

## 📦 Installation & Run Instructions

```bash
# Clone the repository
git clone https://github.com/lalini11/Blogging-Platform-Backend.git
cd blog-backend

# Install dependencies
npm install

# Configure database and environment
cp .env.example .env
# Edit the .env file with your MySQL credentials

# Run migrations (if using Sequelize CLI) or ensure models are synced
npx sequelize-cli db:migrate

# Start the server
nodemon server.js or nodemon

# Environment Variables (.env)
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=database_name
JWT_SECRET=your_jwt_secret_key

# API end points 

Auth
-POST /api/auth/signup
-POST /api/auth/login

Posts
-GET /api/posts – Get all public posts
-POST /api/posts – Create post (auth required)
-PUT /api/posts/:id – Edit post (auth + ownership)
-DELETE /api/posts/:id – Delete post (auth + ownership)
-GET /api/posts/:id – Get post detail

