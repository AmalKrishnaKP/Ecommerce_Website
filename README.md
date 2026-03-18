# PixelCrate Ecommerce Website

PixelCrate is a full-stack ecommerce platform for electronics, built with a React + Vite frontend and an Express + MongoDB backend. It supports buyer and seller workflows, authentication, cart and checkout flow, order tracking, shipping updates, profile management, and support ticket creation.

## Highlights

- Role-based authentication for Buyer, Seller, and Admin login flow
- Product catalog with category filtering
- Cart management with quantity updates and order placement
- Seller shipping dashboard to mark orders as delivered
- Buyer order status page with delivery contact actions
- Profile editing (name, address, avatar)
- Support issue submission (website/order/item categories)
- Fully responsive UI across small, medium, and large screens

## Tech Stack

Frontend:
- React 19
- Vite 7
- Tailwind CSS 4
- Zustand
- Axios
- React Router

Backend:
- Node.js
- Express 5
- MongoDB + Mongoose
- JWT auth (cookie-based)
- Cloudinary (image upload)

## Monorepo Structure

- `backend/` Express API server, controllers, models, middleware, routers
- `frontend/` React client application
- `package.json` root scripts for build and production start

## Prerequisites

- Node.js 18+ (Node 20+ recommended)
- npm 9+
- MongoDB database
- Cloudinary account (for image upload)

## Environment Variables

Create `backend/.env` with:

```env
PORT=5000
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173

MONGO_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Installation

Install dependencies for all packages:

```bash
npm install
npm install --prefix backend
npm install --prefix frontend
```

## Run Locally

Start backend:

```bash
npm run dev --prefix backend
```

Start frontend (new terminal):

```bash
npm run dev --prefix frontend
```

Local URLs:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

## Production Build and Start

Build frontend and install package dependencies:

```bash
npm run build
```

Start backend server (serves API and frontend `dist` in production):

```bash
npm start
```

## Available Scripts

Root:
- `npm run build` install deps for backend/frontend and build frontend
- `npm start` start backend server

Backend (`backend/package.json`):
- `npm run dev` start server with nodemon
- `npm start` start server with node

Frontend (`frontend/package.json`):
- `npm run dev` start Vite dev server
- `npm run build` build frontend
- `npm run preview` preview production build
- `npm run lint` run ESLint

## API Base URL Behavior

Frontend Axios client uses:
- Development: `http://localhost:5000/api`
- Production: `/api`

This enables same-origin deployment where Express serves both frontend build and API routes.

## Core User Flows

Buyer:
- Sign up / log in
- Browse products and filter by category
- Add to cart and place orders
- Track order status and contact delivery number

Seller:
- Log in
- Add products
- View shipping orders
- Mark orders as success with delivery phone number

## Troubleshooting

- If CORS errors appear in development, verify `CLIENT_ORIGIN` and frontend URL.
- If images fail to upload, verify Cloudinary credentials.
- If DB connection fails, verify `MONGO_URL` and network access.

## License

ISC

## Author

Amal Krishna K P
