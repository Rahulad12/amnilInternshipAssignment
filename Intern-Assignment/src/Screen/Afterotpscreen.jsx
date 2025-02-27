/**
 * @file Afterotpscreen.jsx
 * @description This file contains the implementation of the After OTP Screen component, which is a multi-step form.
 * It displays a progress bar and manages the navigation between steps using React state.
 */

import React from "react";
import { useState } from "react"; // Importing useState for state management
import "../Customecss/Afterotp.css"; // Importing custom CSS for styling
import Form from "../Component/Form"; // Importing Form component
import Progressbar from "../Component/Progressbar"; // Importing Progressbar component

// Afterotpscreen Component: Main functional component
const Afterotpscreen = () => {
  // State to manage the current step in the multi-step process
  const [currentStep, setCurrentStep] = useState(1);

  // Array of step names for the progress bar
  const steps = [
    "Business Type",
    "Business Details",
    "Authorized Representative",
    "Business Owners",
    "Company Directors",
    "Support Information",
    "Add Details",
    "Complete Registration",
  ];

  // Handler function to move to the next step
  const handelNextSteps = () => {
    // Prevent going beyond the last step
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("You have reached the last step.");
    }
  };

  // Handler function to move to the previous step
  const handelPrevSteps = () => {
    // Prevent going before the first step
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      alert("You are already at the first step.");
    }
  };

  // Render the After OTP Screen UI
  return (
    <div className="afterotp-container">
      {/* Page header */}
      <div className="text-head">
        <h1>Multi-Step Process Form Assignment</h1>
      </div>

      {/* Progress Bar Component */}
      <Progressbar steps={steps} currentsteps={currentStep} />

      <div className="afterotp-section">
        {/* Form Component for multi-step form */}
        <div className="afterotp-section-form">
          <Form nextsteps={handelNextSteps} previoussteps={handelPrevSteps} />
        </div>
      </div>
    </div>
  );
};

export default Afterotpscreen;
