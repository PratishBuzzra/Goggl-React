# Goggl - A Google-Style Search App

Goggl is a clean and responsive Google-style search engine clone built with React, Context API, React Router, and TailwindCSS. It fetches data using Google Custom Search API and YouTube API, providing a fully functional search experience across Web, Images, Videos, and News.
Designed as a React mini project to reinforce core concepts like state management, debouncing, theming, and routing.

---

## Features

- Search across Web, Images, Videos, and News
- Dark/Light mode toggle (persisted with localStorage)
- Global state management using React Context API
- Debounced search input for performance
- Loading spinner while fetching data
- Responsive and accessible UI built with TailwindCSS

---

## Tech Stack

- React (Hooks)
- React Router DOM (Routing)
- Context API (Global state)
- TailwindCSS (Styling)
- Google Custom Search API (Search, Images, News)
- YouTube API (via RapidAPI) (Videos)
- use-debounce (Search optimization)
- localStorage (Persist theme)

---

##  Live Demo
Check out the live version of the project here:  
[Live Preview](https://goggl-react-two.vercel.app/)

---
## Getting Started

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/PratishBuzzra/Goggl-React.git

# Navigate to the project folder
cd Goggl-React

# Install dependencies
npm install

# Start the development server
npm run dev

```

---

## Environment Variables

Create a .env file in the root directory and add your API keys:

```
VITE_GOOGLE_API_KEY=your_google_api_key
VITE_CX_ID=your_google_cx_id
VITE_RAPIDAPI_KEY=your_rapidapi_key

```
---
