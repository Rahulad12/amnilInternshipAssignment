import { loginUserApi } from "../api/userApi.js";
import { createForm } from "../component/Form.js";

// Redirect logged-in user to dashboard
if (localStorage.getItem("token")) {
  window.location.href = "/src/screen/employeeDashboard.html";
}

export const userLogin = () => {
  const { userAuthForm, emailInput, passwordInput, submitButton } =
    createForm();

  userAuthForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Validate form fields
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      return alert("Please enter both email and password");
    }

    submitButton.disabled = true;
    submitButton.innerText = "Logging in...";

    try {
      const response = await loginUserApi(email, password);

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
      emailInput.value = "";
      passwordInput.value = "";
      submitButton.disabled = false;
      submitButton.innerText = "Login"; // Reset button text
    }
  });
};
userLogin();
