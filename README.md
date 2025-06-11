# 💬 Real-Time Chat App with Authentication & User Search

This is a real-time chat application that utilizes **Socket.IO** for instant messaging and **JWT (JSON Web Tokens)** for user authentication. Users can search for other users online and start chatting with them. This documentation outlines the setup and features of the app, including authentication and user search functionalities.

---

## 🚀 Features

### ✅ Authentication
- Secure Sign Up & Login with JWT
- Passwords are hashed with `bcryptjs`
- Protected routes (only accessible when authenticated)

### 💬 Real-Time Messaging
- Instant chat powered by **Socket.IO**
- Auto socket connection on login
- Real-time updates without refreshing

### 🔍 User Search
- Find users by username
- Check if the user is online
- Start private conversations instantly

---

## 🛠️ Tech Stack

### Backend:
- **Node.js**, **Express.js**
- **MongoDB + Mongoose**
- **Socket.IO**
- **JWT** (Authentication)
- **bcryptjs**, **dotenv**, **cookie-parser**

### Frontend:
- **React.js**
- **Socket.IO Client**
- **Tailwind CSS** (for styling)
- **React Router DOM**

---

## 🌐 Preview

![Website Screenshot](./screen/github.PNG)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Install Dependencies

#### For Backend
```bash
cd back
npm install
```

#### For Frontend
```bash
cd ../front
npm install
```

### 3. Setup Environment Variables

#### Backend: `back/.env`
```env
PORT=7000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173
```

> Replace `your_mongodb_connection_string` and `your_super_secret_key` with actual values.

### 4. Run the App

#### Backend
```bash
npm run dev
```

#### Frontend
```bash
npm run dev
```

App should now be live at:  
📦 Frontend → [http://localhost:5173](http://localhost:5173)  
⚙️ Backend → [http://localhost:7000](http://localhost:7000)

---

## 📁 Project Structure

```
chat-app/
│
├── back/                  # Backend (Express + Socket.IO + MongoDB)
│   ├── controllers/
│   ├── model/
│   ├── routes/
│   ├── middleware/
│   ├── db/
│   ├── util/
│   ├── socket/
│   └── server.js
│
frontend/
│
├── public/                      # Static files (favicon, etc.)
│   └── index.html               # Main HTML template
│
├── src/                         # All React source code
│
│   ├── assets/                  # Images, icons, and static assets
│
│   ├── components/              # Reusable UI components
│   │   ├── ChatWindow.jsx
│   │   ├── MessageItem.jsx
│   │   └── ...                  # Other components
│
│   ├── context/                 # React Context (if used)
│   │   └── AuthContext.jsx
│
│   ├── hooks/                   # Custom React hooks
│   │   └── useSignup.js
│
│   ├── pages/                   # Main route pages (Login, Signup, Chat, etc.)
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Chat.jsx
│
│   ├── zustand/                 # Zustand state management store
│   │   └── userStore.js
│
│   ├── utils/                   # Utility functions/helpers
│   │   └── validateForm.js
│
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # React entry point
│   ├── App.css                  # Global styles (optional with Tailwind)
│   ├── index.css                # Tailwind and global styles
│
├── .eslintrc.cjs                # ESLint configuration
├── README.md                    # Project README
├── package.json
├── vite.config.js               # Vite configuration (if using Vite)

│
└── screen/github.PNG      # Preview screenshot
```

---

## 💡 Future Features

- ✅ Message timestamps  
- ✅ Seen/delivered status  
- 🔜 Group chats  
- 🔜 Notifications  

---

## 🤝 Contributing

Pull requests are welcome! If you want to add new features or fix bugs, feel free to fork the repo and submit a PR.

---


