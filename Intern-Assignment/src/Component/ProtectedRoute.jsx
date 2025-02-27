/**
 * @file ProtectedRoute.jsx
 * @description This file defines a ProtectedRoute component that restricts access to certain routes.
 * It checks if a user is verified using local storage and either renders the requested route or redirects to the home page.
 */

import React from "react"; // Importing React library
import { Outlet, Navigate } from "react-router-dom"; // Importing components for route rendering and redirection

// ProtectedRoute Component: Manages route access based on verification status
const ProtectedRoute = () => {
  // Retrieve verification status from local storage
  const isverify = localStorage.getItem("isVerified");

  // Conditional rendering: If verified, render the requested route (Outlet); otherwise, redirect to "/"
  return isverify ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
