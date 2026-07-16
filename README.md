# BuildCraft Pro — MERN Construction Management Platform

A full-stack scaffold for a construction management platform (Plan. Design. Build. Track.)
built with **MongoDB, Express, React, Node** and **Tailwind CSS**.

## What's included

### Backend (`/backend`)
- Express REST API with JWT auth (access + refresh tokens), role-based access control
- Roles: `customer`, `architect`, `engineer`, `interior_designer`, `site_supervisor`, `admin`
- Mongoose models: User, Project (with construction stages + daily updates), Payment, Blog, Testimonial, Message
- Socket.io wired in for live chat, live progress updates, and GPS pings
- Cost estimator endpoint (`POST /api/projects/estimate`)
- Structured for easy extension: Cloudinary uploads, Razorpay/Stripe, Twilio, OpenAI

### Frontend (`/frontend`)
- React 18 + Vite + React Router 6 + Tailwind CSS
- Public site: Home, About, Services, Portfolio (with filtering), Pricing, Blogs, Contact
- Auth: Login / Register wired to the backend JWT flow (`AuthContext`)
- Customer Dashboard: Overview, My Projects, Live Tracking, Documents, Payments, Chat (socket.io)
- Admin Dashboard: Analytics, Projects, Customers, Blog CMS
- Component-by-component structure under `src/components` and `src/pages`

## Design system
- Palette: blueprint navy (`#122A4A`), construction amber (`#E28A1E`), concrete off-white (`#F6F5F1`), charcoal
- Type: Space Grotesk (display) + Inter (body)
- A blueprint grid background motif ties the drafting/architecture theme together

## Getting started

### 1. Backend
```bash
cd backend
cp .env.example .env   # fill in MONGO_URI, JWT secrets, etc.
npm install
npm run dev             # http://localhost:5000
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev              # http://localhost:5173 (proxies /api to :5000)
```

### 3. First admin user
Register normally (defaults to `customer` role), then manually update that
user's `role` field to `admin` in MongoDB (e.g. via MongoDB Atlas or Compass)
to access `/admin`.

## What's scaffolded vs. what needs your API keys
These modules from the original spec are wired with real endpoints/UI but need
external services connected to go fully live:
- **Payments**: Razorpay/Stripe order creation — hook into `paymentController.js`
- **File uploads** (CAD, drawings, photos): Cloudinary — add `multer` + `cloudinary` upload logic
- **Notifications**: Twilio (SMS/WhatsApp) + Firebase Cloud Messaging (push)
- **Video meetings**: Zoom / Google Meet API, or the built-in WebRTC via Socket.io signaling
- **AI features** (floor plan generator, AI chatbot, cost/interior/vastu suggestions): OpenAI API
- **3D viewer / AR preview**: Three.js + React Three Fiber (dependency included, no scene yet)
- **Google Maps / DocuSign**: add API keys and integrate in Contact page / Documents module

## Folder structure
```
buildcraft-pro/
├── backend/
│   ├── config/db.js
│   ├── models/ (User, Project, Payment, Blog, Testimonial, Message)
│   ├── middleware/ (auth, role, errorHandler)
│   ├── controllers/ (auth, project, payment, blog)
│   ├── routes/ (auth, users, projects, payments, blogs)
│   ├── socket/socket.js
│   └── server.js
└── frontend/
    └── src/
        ├── api/axios.js
        ├── context/AuthContext.jsx
        ├── components/
        │   ├── layout/ (Navbar, Footer)
        │   ├── common/ (Button, Card, ProtectedRoute)
        │   ├── home/ (Hero, ServicesGrid, ConstructionProcess, CostCalculator, WhyChooseUs, Testimonials, FAQ, FeaturedProjects)
        │   └── dashboard/ (Sidebar, StatCard, ProgressTimeline)
        └── pages/
            ├── Home, About, Services, Portfolio, Pricing, Blogs, Contact, Login, Register, NotFound
            ├── dashboard/ (CustomerDashboard, DashboardHome, MyProjects, LiveTracking, Documents, Payments, Chat)
            └── admin/ (AdminDashboard, AdminHome, AdminProjects, AdminCustomers, AdminBlogs)
```
