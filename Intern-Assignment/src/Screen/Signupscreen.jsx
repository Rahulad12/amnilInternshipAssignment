/**
 * @file Signup.jsx
 * @description This file defines the Signup component, which structures a responsive layout
 * containing `Layoutcards` and `Userverification` components. The layout adjusts for small and medium screen sizes using CSS grid.
 */

import React from "react"; // Importing React library
import Userverification from "../Component/Userverification"; // Importing Userverification component
import Layoutcards from "../Component/Layoutcards"; // Importing Layoutcards component

// Signup Component: Displays the signup screen layout
const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 signup-container">
      {/* Left section: Layoutcards */}
      <div className="md:col-span-6">
        <Layoutcards />
        {/* This div contains the Layoutcards component for visual display */}
      </div>

      {/* Right section: Userverification */}
      <div className="md:col-span-6">
        <Userverification />
        {/* This div contains the Userverification component for user actions */}
      </div>
    </div>
  );
};

export default Signup;
