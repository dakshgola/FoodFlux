# 🍽️ FoodFlux

FoodFlux is a full-stack food video platform that allows users to discover food through short-form videos while enabling food partners (restaurants) to upload content and track engagement such as likes and saves.

The project focuses on real-world product design, role-based authentication, and scalable architecture rather than just UI animations or clones.

---

## 🚀 Overview

Food discovery is becoming increasingly visual, but most platforms are built only for consumers. FoodFlux bridges this gap by supporting two distinct roles:

- **Users** can browse food videos, like and save content.
- **Food Partners** can upload food videos and monitor how their content performs.

The application is built using a production-style full-stack architecture with clear separation between frontend and backend.

---

## ✨ Features

### 👤 User Features
- Short-form vertical food video feed
- Auto-playing videos with smooth scroll snapping
- Like and save videos
- View food partner profiles

### 🧑‍🍳 Food Partner Features
- Separate authentication flow
- Upload food videos
- Partner dashboard showing:
  - Total uploaded videos
  - Total likes
  - Total saves
  - Per-video engagement metrics

### 🌐 Platform Features
- Public landing page
- Role-based login (User / Food Partner)
- Clean routing structure
- Mobile-first UI with desktop-friendly layout
- REST API based backend

---

## 🧠 Technical Highlights

- Role-based authentication and routing
- Separation of public pages and protected app pages
- Container-based video feed (not locked to full viewport)
- Scalable backend structure using controllers, routes, and models
- Frontend refactored without changing backend logic

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Custom CSS (glassmorphism-inspired UI)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- REST APIs

---

## 📁 Project Structure

### Frontend
```txt
frontend/
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx
│   │   ├── ReelFeed.jsx
│   │   └── AppContainer.jsx
│   │
│   ├── pages/
│   │   ├── auth/
│   │   ├── general/
│   │   └── food-partner/
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
```

### Backend
```txt
backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── utils/
│
├── videos/
├── server.js
└── package.json
```

---

## ▶️ Getting Started (Local Setup)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/dakshgola/FoodFlux.git
cd FoodFlux
```

### 2️⃣ Backend setup
```bash
cd backend
npm install
npm run dev
```

Create a `.env` file in the backend folder:
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### 3️⃣ Frontend setup
```bash
cd ../frontend
npm install
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

---

## 📌 Future Improvements
- Content ranking (trending / most liked)
- Video analytics charts for partners
- Admin moderation panel
- Deployment with CI/CD

---
