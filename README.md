📘 BACKEND README 
# 🧠 To-Do App Backend (Node.js + Express + MongoDB)

This is the backend service for the **To-Do Board Application**.  
It handles authentication, board CRUD operations, and data persistence using MongoDB.

---

## 🌐 Live API URL
👉 https://todo-backend-1kdd.onrender.com

> If this link opens in browser and shows **"API is running"**, the backend is live.

---

## ⚙️ Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- bcryptjs (password hashing)
- dotenv
- CORS

---

## 📂 Project Structure


to-do-backend/
│
├── config/
│ └── db.js
├── controllers/
│ ├── authController.js
│ └── boardController.js
├── models/
│ ├── User.js
│ └── Board.js
├── routes/
│ ├── auth.js
│ └── boardRoutes.js
├── .gitignore
├── index.js
├── package.json


---

## 🔐 Authentication APIs

### Register


POST /api/register


**Body**
```json
{
  "email": "test@test.com",
  "password": "123456"
}

Login
POST /api/auth/login


Body

{
  "email": "test@test.com",
  "password": "123456"
}

📋 Board APIs
Get Boards
GET /api/boards?userId=USER_ID

Create Board
POST /api/boards

{
  "title": "My First Board",
  "userId": "USER_ID"
}

Update Board
PUT /api/boards/:id?userId=USER_ID

Delete Board
DELETE /api/boards/:id?userId=USER_ID

🛠️ Local Setup
1️⃣ Clone Repo
git clone https://github.com/Virendra7773/todo-backend.git
cd todo-backend

2️⃣ Install Dependencies
npm install

3️⃣ Create .env
PORT=5000
MONGO_URI=your_mongodb_connection_string

4️⃣ Start Server
npm start


Server runs on:

http://localhost:5000

🚀 Deployment

Hosted on Render

Auto-deploy from GitHub

Environment variables set securely on Render dashboard

👨‍💻 Author

Virendra Singh
