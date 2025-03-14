import { registerUserApi } from "../api/userApi.js";
import {
  authformHelper,
  resetForm,
  errorMessage,
  isLoggedIn,
} from "../utils/helper.js";

import { checkEmailPassword } from "../utils/validator.js";

// Redirect if already logged in
if (isLoggedIn()) {
  window.location.href = "../screen/employeeDashboard.html";
}

export const userRegister = () => {
  const { authForm, emailInput, passwordInput, submitButton } =
    authformHelper();

  authForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous general error message
    errorMessage({ message: "", success: true });

    const validationError = checkEmailPassword(password, email); // Check email and password and return the error message here
    if (validationError) {
      return;
    }

    submitButton.disabled = true;
    submitButton.innerText = "Registering...";

    try {
      const response = await registerUserApi(email, password);

      if (response?.success) {
        errorMessage({
          success: true,
          message: response?.message?.message || "Registration successful",
        });
        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = "/src/screen/employeeDashboard.html";
        }, 1000);
      } else {
        errorMessage({
          success: false,
          message: response?.message || "Registration failed",
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      errorMessage({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      // Reset form and button state
      resetForm(emailInput, passwordInput);
      submitButton.disabled = false;
      submitButton.innerText = "Register";
    }
  });
};

// Initialize register function
userRegister();
