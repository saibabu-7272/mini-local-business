# Mini Local Business Dashboard

## Project Overview

A simple **Mini Local Business Dashboard** that allows small businesses to view their simulated Google ratings, reviews, and AI-generated SEO headlines.  
This project demonstrates how small businesses might track basic SEO and customer engagement metrics using a clean, responsive dashboard.

---

## Live Demo Links

- **Frontend Live:** [https://mini-local-business.vercel.app](https://mini-local-business.vercel.app)
- **Backend Live API:** [https://mini-local-business-api.onrender.com](https://mini-local-business-api.onrender.com)

> Replace the above links with your deployed URLs after hosting.

---

## Tech Stack

- **Frontend:** React JS, Plain CSS
- **Backend:** Node.js, Express.js
- **HTTP Client:** Fetch API

---

## Project Structure

Mini Local Business Dashboard
├── frontend
│ ├── public
│ ├── src
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ ├── package.json
├── backend
│ ├── server.js
│ ├── package.json
└── README.md


---

## Setup Instructions

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm (comes with Node.js)

---

### ⚙️ Backend Setup

1. Open the terminal and navigate to the backend folder:

```bash
cd backend
```
2. Install backend dependencies:
```
npm install
```
3. Start the backend server:
```
node server.js
```
The backend will run on:
http://localhost:5000

### Frontend Setup
1. Open another terminal and navigate to the frontend folder:
```
cd frontend
```
2. Install frontend dependencies:
```
npm install
```
3. Start the React development server:
The frontend will run on:
Example: http://localhost:3000

## API Endpoints
###  POST /business-data
Simulates fetching a business's Google rating, number of reviews, and AI-generated SEO headline.

``` Example Request:
POST http://localhost:5000/business-data
Content-Type: application/json

{
  "name": "Cake & Co",
  "location": "Mumbai"
}

```
``` Example Response:
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```
### GET /regenerate-headline?name={businessName}&location={location}
Generates a new SEO headline for the given business.
```Example Request:
GET http://localhost:5000/regenerate-headline?name=Cake%20&%20Co&location=Mumbai
```
``` Example Response:
{
  "headline": "Discover Why Cake & Co in Mumbai is the Talk of the Town"
}
```
Features:
  Submit your Business Name & Location to get simulated Google ratings and SEO headline
  Regenerate a new AI-style SEO headline
  Clean, responsive interface using plain CSS
  Simple and easy API integration with Fetch

