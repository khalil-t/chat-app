# Chat App with Authentication & User Search

This is a real-time chat application that utilizes **Socket.IO** for instant messaging and **JWT (JSON Web Tokens)** for user authentication. Users can search for other users online and start chatting with them. This documentation outlines the setup and features of the app, including authentication and user search functionalities.

## 🚀 Features

- **User Authentication:**
  - Users can sign up and log in using email and password.
  - Authentication is handled via **JWT** (JSON Web Tokens).
  
- **Real-time Chat:**
  - Users can send and receive messages in real-time using **Socket.IO**.

- **User Search:**
  - Users can search for other users by username to see if they are online and available to chat.

## 🧑‍💻 Requirements

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Socket.IO (Real-time communication)
  - JWT (For authentication)
  - bcryptjs (For password hashing)
  - dotenv (For environment variables)

- **Frontend:**
  - React.js
  - Socket.IO client (for real-time messaging)

---


### 1. Clone the repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
