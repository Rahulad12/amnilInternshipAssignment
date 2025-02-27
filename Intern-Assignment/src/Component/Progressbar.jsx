/**
 * Progressbar Component
 * Displays a progress bar with steps and indicates the current and completed steps visually.
 *
 * Description:
 * - A horizontal progress bar showing the completion percentage based on the current step.
 * - Each step is represented by a circle and labeled with a step title.
 * - The current step and completed steps have distinct visual styles.
 *
 * Props:
 * @param {Array<string>} steps - An array of step names or titles.
 * @param {number} currentsteps - The index (1-based) of the current active step.
 *
 * Styling:
 * Custom CSS classes are applied for the progress bar and steps from "Progressbar.css".
 *
 * Example Usage:
 * <Progressbar
 *   steps={["Step 1", "Step 2", "Step 3"]}
 *   currentsteps={2}
 * />
 *
 * @returns {JSX.Element} The Progressbar component.
 */

import React from "react";
import "../Customecss/Progressbar.css";

const Progressbar = ({ steps, currentsteps }) => {
  // Calculate the progress percentage
  const progressPercentage = ((currentsteps - 1) / (steps.length - 1)) * 100;
  console.log(`${progressPercentage}%`); // Debug log for current progress percentage

  return (
    <div className="bar-container">
      {/* Progress Bar Fill */}
      {
        // i did my best but also im not able to make progress bar responsive so i will leave it as it is
      }
      <div className="progress-bar">
        <div
          style={{
            position: "relative", // Positioning the fill inside the bar
            top: 0,
            left: 0,
            height: "100%", // Full height of the progress bar
            width: `${progressPercentage}%`, // Dynamic width based on progress
            backgroundColor: "#34c759", // Green color for the fill
            transition: "width 0.3s ease-in-out", // Smooth transition effect
          }}
        ></div>
      </div>

      {/* Steps */}
      {steps.map((step, index) => {
        const isCompleted = currentsteps > index + 1; // Check if the step is completed
        const isCurrent = currentsteps === index + 1; // Check if the step is the current one

        return (
          <div className="steps" key={index}>
            {/* Circle for each step */}
            <span
              className={`circle ${
                isCompleted
                  ? "bg-green-500" // Green circle for completed step
                  : isCurrent
                  ? "bg-white" // White circle for current step
                  : "bg-gray-400" // Gray circle for incomplete step
              }`}
            >
              {isCompleted ? "✓" : ""} {/* Checkmark for completed step */}
            </span>

            {/* Step Title */}
            <div className="step-title">
              <span
                className={` ${
                  isCurrent ? "text-black" : "text-gray-400"
                } block`}
              >
                {step} {/* Display step name */}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Progressbar;
