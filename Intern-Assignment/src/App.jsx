/**
 * @file App.jsx
 * @description This file defines the main application component and sets up route configurations
 * using React Router. It includes a protected route that requires user verification to access certain screens.
 */

import React from "react"; // Importing React library
import { Routes, Route } from "react-router-dom"; // Importing React Router components for routing

// Importing screen components
import Signup from "./Screen/Signupscreen"; // Signup screen
import Afterotpscreen from "./Screen/Afterotpscreen"; // After OTP screen

// Importing protected route component
import ProtectedRoute from "./Component/ProtectedRoute"; // Protected route for restricted access

// Main App Component
const App = () => {
  return (
    <div>
      {/* Route configurations using React Router */}
      <Routes>
        {/* Public route for Signup */}
        <Route path="/" element={<Signup />} />

        {/* Protected route: Requires user verification */}
        <Route path="/protected" element={<ProtectedRoute />}>
          {/* Nested route: Accessible only if user passes ProtectedRoute */}
          <Route path="afterotp" element={<Afterotpscreen />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
