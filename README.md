💸 Wallet - Expense Tracker (React Native + Express) 

A full-stack mobile wallet app built with React Native, Express, PostgreSQL, and Clerk authentication.
Track income and expenses seamlessly — complete with backend, authentication, and real-time sync.

This isn’t just a front-end app — it’s a complete mobile application with backend integration, authentication, and cloud-based storage.

✅ Works on iOS & Android (simulator or real device)
✅ Uses your existing React knowledge
✅ No need for Swift, Kotlin, or native modules
✅ Build a full-stack project in under 4 hours


App Features Overview
🔐 Authentication with email verification using Clerk
📝 Signup & Login flows with 6-digit email code
🏠 Home Screen showing current balance & past transactions
➕ Create Screen to add income or expense transactions
🔄 Pull to refresh for live updates
🗑️ Delete transactions to update balance in real-time
🚪 Logout and return to the login screen

What You’ll Learn
⚙️ Build and deploy an Express API with PostgreSQL (Neon)
🔐 Implement authentication & email verification with Clerk
📲 Build a full mobile app using React Native & Expo
🧵 Manage state & navigation with React Navigation
🛡️ Apply Rate Limiting using Redis

.env Setup
⚙️ Backend (/backend)
PORT=5001
NODE_ENV=development

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>

DATABASE_URL=<your_neon_postgres_connection_url>

REDIS_URL=<your_redis_connection_url>

⚙️ Mobile (/mobile)
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_key>

🚀 Run the Project
🖥️ Backend
cd backend
npm install
npm run dev

📱 Mobile App
cd mobile
npm install
npx expo start

🧩 Tech Stack
Frontend: React Native (Expo), React Navigation
Backend: Node.js, Express, PostgreSQL (Neon)
Auth: Clerk (Email Verification)
Cache / Rate Limiting: Redis
Deployment: Cloud-based (Vercel, Neon, Expo)

💡 Notes
You can use either a simulator or a real device via Expo Go.
Don’t forget to configure your Clerk and Neon credentials properly.
This project is ideal for full-stack mobile development with modern tooling.
🚀 Deploy both backend & mobile using cloud-based tools
🧪 Perfect for beginner React Native developers
