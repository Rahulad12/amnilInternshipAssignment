import {
  emailErrorMessage,
  passwordErrorMessage,
  errorMessage,
} from "./helper.js";

export const checkEmailPassword = (password, email) => {
  // Clearing previous error messages
  emailErrorMessage("");
  passwordErrorMessage("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

  let hasError = false;

  if (!email) {
    emailErrorMessage("Email is required.");
    hasError = true;
  }

  if (!password) {
    passwordErrorMessage("Password is required.");
    hasError = true;
  }

  // Stop further checks if email or password is missing
  if (hasError) return "Validation Error";

  if (!emailRegex.test(email)) {
    emailErrorMessage("Please enter a valid email address.");
    hasError = true;
  }

  if (!passwordRegex.test(password)) {
    passwordErrorMessage(
      "Password should be at least 8 characters long and contain at least one uppercase letter, one number, and one special character."
    );
    hasError = true;
  }

  return hasError ? "Validation Error" : null;
};

export const passwordChangeValidator = (...data) => {
  const [oldPassword, newPassword, confirmPassword] = data;

  passwordErrorMessage("");
  errorMessage("");

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

  let hasError = false;

  if (!oldPassword) {
    passwordErrorMessage("Old Password is required.");
    hasError = true;
  }

  if (!newPassword) {
    passwordErrorMessage("New Password is required.");
    hasError = true;
  }

  if (!confirmPassword) {
    passwordErrorMessage("Confirm Password is required.");
    hasError = true;
  }

  if (oldPassword === newPassword) {
    errorMessage({
      message: "Current password and new password cannot be same",
      success: true,
    });
    hasError = true;
  }
  if (newPassword !== confirmPassword) {
    errorMessage({
      message: "New password and confirm password do not match",
      success: true,
    });
    hasError = true;
  }

  if (!passwordRegex.test(newPassword)) {
    passwordErrorMessage(
      "Password should be at least 8 characters long and contain at least one uppercase letter, one number, and one special character."
    );
    hasError = true;
  }

  return hasError ? "Validation Error" : null;
};

export const handleEmailChangeValidator = (emailInput) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  emailErrorMessage("");

  let hasError = false;
  if (!emailInput) {
    emailErrorMessage("Email is required.");
    hasError = true;
  }
  if (!emailRegex.test(emailInput)) {
    emailErrorMessage("Please enter a valid email address.");
    hasError = true;
  }

  return hasError ? "Validation Error" : null;
};
