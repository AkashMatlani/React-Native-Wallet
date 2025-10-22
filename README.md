# Wallet — Expense Tracker (React Native + Express)

A full‑stack mobile wallet app built with React Native, Express, PostgreSQL, and Clerk authentication. Track income and expenses with backend integration, authentication, and real‑time sync.

- Works on iOS & Android (simulator or real device)
- Full backend (Express + PostgreSQL)
- Email authentication with Clerk
- No native modules required — built with Expo

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Environment Variables](#environment-variables)
- [Run the Project](#run-the-project)
  - [Backend](#backend)
  - [Mobile App](#mobile-app)
- [Notes](#notes)
- [License](#license)

---

## Features

- 🔐 Authentication with Clerk (email verification)
- 📝 Signup & Login flows using a 6‑digit email code
- 🏠 Home screen showing current balance & past transactions
- ➕ Create screen to add income or expense transactions
- 🔄 Pull to refresh for live updates
- 🗑️ Delete transactions and update balance in real time
- 🚪 Logout and return to the login screen

---

## Tech Stack

- Frontend: React Native (Expo), React Navigation  
- Backend: Node.js, Express, PostgreSQL (Neon)  
- Auth: Clerk (Email verification)  
- Cache / Rate limiting: Redis  
- Deployment: Vercel (backend), Neon (Postgres), Expo (mobile)

---

## Requirements

- Node.js (recommended LTS)
- npm or yarn
- Expo CLI (for running the mobile app)
- A Neon (Postgres) database
- Clerk account (publishable & secret keys)
- Redis (for rate limiting, optional but recommended)

---

## Environment Variables

Create .env files in the corresponding directories.

Backend (/backend)
```env
PORT=5001
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>

DATABASE_URL=<your_neon_postgres_connection_url>

REDIS_URL=<your_redis_connection_url>
```

Mobile (/mobile)
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
```

---

## Run the Project

### Backend
```bash
cd backend
npm install
npm run dev
```

### Mobile App
```bash
cd mobile
npm install
npx expo start
```

Use Expo Go or an iOS/Android simulator for testing.

---

## Notes

- You can use either a simulator or a real device via Expo Go.
- Make sure your Clerk and Neon credentials are configured correctly.
- This project is ideal for learning full‑stack mobile development with modern tooling.
- Consider deploying the backend (Vercel) and the database (Neon) for a production setup.

---

## License

MIT — feel free to use and modify.
