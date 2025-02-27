/**
 * @file index.js
 * @description This is the entry point of the React application. It sets up the React application within the DOM,
 * applies global styles, and initializes routing using React Router.
 */

import { StrictMode } from "react"; // Importing StrictMode for highlighting potential problems in the application
import { createRoot } from "react-dom/client"; // Importing createRoot to create the root of the React application

import "./index.css"; // Importing global CSS styles

import { BrowserRouter as Router } from "react-router-dom"; // Importing Router for client-side routing
// import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap styles (commented out, can be uncommented when needed)

import App from "./App.jsx"; // Importing the main App component

// Rendering the application inside the root element of the DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrapping the application with Router for routing support */}
    <Router>
      <App />
    </Router>
  </StrictMode>
);
