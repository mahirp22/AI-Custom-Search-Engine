# AI-Powered Custom Search Engine (Exa API)

A lightweight, AI-powered search engine built using **Flask**, **JavaScript**, and the **Exa Search API**.  
This project allows users to enter natural-language search queries and receive relevant, high-quality results powered by Exa’s AI-driven search capabilities.

The goal of this project was to understand how modern search systems work, practice full-stack development, and integrate an AI-based search API into a clean, responsive web interface.

## 📦 Technologies

### Backend
- Python  
- Flask  
- Exa Search API  

### Frontend
- HTML  
- CSS (custom styling, responsive layout)  
- JavaScript (async fetch, DOM manipulation)  

## 💡 Features

Here’s what you can do with the AI Search Engine:

### 🔍 AI-Powered Search
- Enter natural-language search queries
- Queries are sent to the backend and processed using the **Exa API**
- Returns relevant, high-quality search results

### ⚡ Real-Time Results
- Asynchronous requests using `fetch()`
- Results are rendered dynamically without page reloads
- Displays titles and external links for each result

### 🧠 Backend API Layer
- Flask server handles:
  - Input validation
  - API requests to Exa
  - Response normalization for frontend use
- Clean separation between backend logic and frontend UI

### 📱 Clean & Responsive UI
- Minimal, modern search interface
- Responsive layout that works on desktop and mobile
- Visual feedback for searching, empty results, and errors

## 🔄 How It Works

1. The user enters a search query in the frontend.
2. The query is sent as JSON to the Flask backend.
3. Flask calls the **Exa Search API** using keyword-based search.
4. Exa returns relevant results.
5. The backend formats the response and sends it back to the frontend.
6. Results are rendered dynamically in the browser.


## 🚦 Running the Project Locally

To run this project on your local machine:

1. Clone or download this repository.
2. Install the required Python dependencies:
   ```bash
   pip install flask exa-py
3. Open app.py and ensure your Exa API key is set.
4. Start the Flask development server:
   ```bash
   python app.py
5. Open your browser and navigate to:
   ```bash
   http://127.0.0.1:5000

## 📚 What I Learned
This project helped strengthen both my backend and AI-integration skills.

### 🧠 AI & Search Systems
- Learned how AI-powered search engines retrieve and rank results
- Worked with natural-language queries instead of simple keyword matching
- Understood how modern search APIs differ from traditional search engines

### 🔄 Backend Development
- Built a Flask API to handle client requests
- Processed and normalized third-party API responses
- Implemented input validation and error handling

### 🌐 Frontend–Backend Integration
- Connected a JavaScript frontend to a Python backend
- Used asynchronous fetch requests and dynamic DOM rendering
- Maintained clean separation of concerns between layers

## 🍿 Demo
### 🎥 Search Engine Walkthrough
This demo shows:
- Entering a natural-language query
- AI-powered search results returned from Exa
- Dynamic rendering of results in the UI

<p align="center"> <img src="assets/exasearchdemo.gif" width="1000"> </p> 


