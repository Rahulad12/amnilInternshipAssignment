import { loginUserApi } from "../api/userApi.js";
import { authformHelper, resetForm } from "../utils/helper.js";

// Redirect logged-in user to dashboard
if (localStorage.getItem("token")) {
  window.location.href = "/src/screen/employeeDashboard.html";
}

export const userLogin = () => {
  const { authForm, emailInput, passwordInput, submitButton } =
    authformHelper();

  authForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Validate form fields
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    submitButton.disabled = true;
    submitButton.innerText = "Logging in...";

    try {
      const response = await loginUserApi(email, password);
      console.log(response);
      // Check if login was successful
      if (response.success) {
        localStorage.setItem("token", response?.message?.user); // Store token
        alert(response?.message?.message || "Login Successful");
        window.location.href = "/src/screen/employeeDashboard.html"; // Redirect to dashboard
      } else {
        alert(response?.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login Failed. Please try again");
    } finally {
      resetForm(emailInput, passwordInput);
      submitButton.disabled = false;
      submitButton.innerText = "Login"; // Reset button text
    }
  });
};
userLogin();
