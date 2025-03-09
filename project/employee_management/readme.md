# Employee Management System

## 📌 Overview
The **Employee Management System** is a web application built with **Vite** for the frontend and **JSON Server** as a mock backend. It allows users to manage employee records efficiently, view employee details, list all employees, and ensure secure access via protected routes.

## 🚀 Features
- **Employee Dashboard** to display individual details
- **List all employees** in a structured format
- **Secure authentication** using protected routes
- **Sidebar navigation** for easy access
- **API integration** with `json-server` for dynamic data fetching
- **Vite-powered development environment** for fast performance

## 🏗 Project Structure
```
📂 EMPLOYEE_MANAGEMENT
 ├── 📂 backend
 │   ├── 📂 config
 │   │   ├── db.json  # Mock database for JSON Server
 │   ├── 📂 controllers  
 │   ├── 📂 utils  # Helper functions for backend
 │
 ├── 📂 public  # Static assets
 │
 ├── 📂 src
 │   ├── 📂 api  # Handles API requests
 │   ├── 📂 component  # UI components
 │   ├── 📂 css  # Stylesheets
 │   ├── 📂 modules  # Reusable JavaScript modules
 │   ├── 📂 screen  # Pages for navigation
 │   ├── constant.js  # Constants for app settings
 │   ├── main.js  # Entry point for JavaScript logic
 │
 ├── .gitignore  # Git ignore file
 ├── index.html  # Main entry point for the app
 ├── package.json  # Project dependencies & scripts
 ├── package-lock.json  # Package lock file
 ├── readme.md  # Project documentation
```

## 🔧 Setup & Installation
1. **Install Dependencies**
   ```sh
   npm install
   ```
2. **Start Backend and Frontend**
   ```sh
   npm run start
   ```
   - Vite will run the frontend on `http://localhost:5173/`
   - JSON Server will run the mock API on `http://localhost:5000/`

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/employees/` | Fetch employee details |
| `GET` | `/users` | Fetchtheusers |

## 🛠 Technologies Used
- **Frontend:** Vite, HTML, CSS, JavaScript
- **Backend:** JSON Server, Node.js

# Developer 
``sh 
https://adhikarirahul.com.np
``

