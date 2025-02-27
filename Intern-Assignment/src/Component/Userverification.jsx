import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Customecss/Userverification.css";
import Logo from "./Logo";

/**
 * Userverification Component
 * This component handles the email verification process by allowing the user to input a 6-digit code sent to their email.
 * Features:
 * - 6-digit OTP input
 * - Timer countdown for resending code
 * - Form validation (ensuring all inputs are filled before submission)
 */

const Userverification = () => {
  // Hook to navigate to other pages
  const navigate = useNavigate();

  // State to store the code entered by the user
  const [code, setCode] = useState(Array(6).fill(""));
  // State to handle the countdown timer
  const [timelimit, setTimelimit] = useState(99);

  /**
   * Updates the code state as the user types in each input box.
   * @param {string} value - The value entered by the user.
   * @param {number} index - The index of the input box being updated.
   */
  const handleCode = (value, index) => {
    const newInput = [...code]; // Create a copy of the current code state
    newInput[index] = value.slice(-1); // Restrict to a single character
    setCode(newInput);
  };

  // Timer countdown logic
  useEffect(() => {
    if (timelimit > 0) {
      const timer = setTimeout(() => setTimelimit(timelimit - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timelimit]);

  /**
   * Handles form submission, validates if all inputs are filled.
   * Alerts the user if the code is incomplete.
   */
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(code);

    try {
      // Validation: Ensure all code inputs are filled
      if (code.some((digit) => digit === "")) {
        alert("Please fill in all 6 code inputs.");
        return;
      }

      // Simulate verification logic (can replace with API call)
      alert(`Verification code submitted: ${code.join("")}`);

      if (code.join("") === "123456") {
        alert("Verification Successfull");
        localStorage.setItem("isVerified", true);
        navigate("/protected/afterotp");
      } else {
        alert("Verification Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="logo-section">
        <Logo />
        {/* Displaying the Logo */}
      </div>
      <div className="userverify-wrapper">
        <div className="userverify-container">
          <div className="content">
            <h1 className="text-head text-left">Verify your Email</h1>
            <p className="text-muted text-left mt-2">
              Please enter the 6-digit code we just sent to s*******a@xyz.com
            </p>
            <form onSubmit={submitHandler}>
              <div className="code-container">
                {/* Render first 3 code input boxes */}
                {code.slice(0, 3).map((value, index) => (
                  <input
                    type="text"
                    key={index}
                    className="code-box"
                    value={value}
                    onChange={(e) => handleCode(e.target.value, index)}
                    maxLength="1"
                    required
                  />
                ))}
                <span className="text-4xl">-</span>
                {/* Render last 3 code input boxes */}
                {code.slice(3, 6).map((value, index) => (
                  <input
                    type="text"
                    key={index + 3}
                    className="code-box"
                    value={value}
                    onChange={(e) => handleCode(e.target.value, index + 3)}
                    maxLength="1"
                    required
                  />
                ))}
              </div>
              <button type="submit" className="verify-button">
                Verify
              </button>
            </form>
            <div className="timer text-muted">
              {timelimit > 0 ? (
                <p>
                  Wait {Math.floor(timelimit / 60)}:
                  {timelimit % 60 < 10 ? "0" : ""}
                  {timelimit % 60} before requesting a new code.
                </p>
              ) : (
                <p
                  className="resend-button"
                  onClick={() => setTimelimit(99)}
                  style={{ cursor: "pointer" }}
                >
                  Didn't receive the code?{" "}
                  <span className="text-blue-400">Resend Code</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="userverify-footer">
        <p className="text-muted">
          By continuing, you’re agreeing to Nobody’s
          <span className="text-blue-400"> Terms of Service</span>,
          <span className="text-blue-400"> Privacy Policy</span> <br />
          and
          <span className="text-blue-400"> Cookie Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default Userverification;
