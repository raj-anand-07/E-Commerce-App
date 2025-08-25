# E-Commerce Website

A full-stack **E-Commerce web app** built with **React.js (frontend)** and **Node.js + Express (backend)**, featuring product browsing, cart management, authentication, and order handling.

---

## Features
- Modern UI (React.js + Tailwind)
- Product listing, search & filters
- Cart & checkout system
- JWT-based authentication (login/register)
- Admin product/order management
- RESTful APIs with MongoDB

---

## Tech Stack
**Frontend:** React.js, Context, Axios  
**Backend:** Node.js, Express.js, MongoDB, JWT, bcrypt  
**Deployment:** Vercel/Netlify (frontend), Render/Railway (backend), MongoDB Atlas (DB)

---

## Structure
ecommerce-app/
│
├── backend/ # Node.js + Express backend
│ ├── models/ # Database models
│ ├── routes/ # API routes
│ ├── controllers/ # Business logic
│ ├── config/ # DB & environment config
│ └── server.js # Entry point
│
├── frontend/ # React.js frontend
│ ├── public/ # Static assets
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Application pages
│ │ ├── context/ # State management
│ │ └── App.js # Main app component
│ └── package.json
│
├── README.md
└── package.json # Root dependencies

Developed by Anand Raj
