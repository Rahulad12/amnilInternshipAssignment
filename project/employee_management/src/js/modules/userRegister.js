import { registerUserApi } from "../api/userApi.js";
import { authformHelper, resetForm } from "../utils/helper.js";
import { emailAndPasswordValidator } from "../utils/validator.js";

// Redirect logged-in user to dashboard
if (localStorage.getItem("token")) {
  window.location.href = "/src/screen/employeeDashboard.html";
}

export const userRegister = () => {
  const { authForm, emailInput, passwordInput, submitButton } =
    authformHelper();
  console.log("authForm", authForm);
  authForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate email and password
    const errorMessage = emailAndPasswordValidator(email, password);
    if (errorMessage) {
      alert(errorMessage);
      resetForm(emailInput, passwordInput);
      return;
    }

    // Disable submit button to prevent multiple clicks
    submitButton.disabled = true;
    submitButton.innerText = "Registering...";

    try {
      const response = await registerUserApi(email, password);

      if (response?.success) {
        alert(response?.message?.message || "Registration Successful!");
        localStorage.setItem("token", response?.message?.user);
        window.location.href = "/src/screen/employeeDashboard.html";
      } else {
        alert(response?.message || "Registration Failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
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
