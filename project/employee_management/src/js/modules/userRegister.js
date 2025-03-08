import { registerUserApi } from "../apiService/userApi.js";
import { createForm } from "../component/Form.js";

export const userRegister = () => {
  const { userAuthForm, emailInput, passwordInput, submitButton } =
    createForm();

  userAuthForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    console.log(email, password);

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    submitButton.disabled = true;
    submitButton.innerText = "Registering...";

    try {
      const response = await registerUserApi(email, password);
      console.log(response);
      if (response.success) {
        alert(`${response?.message}` || "Register successfull");
        localStorage.setItem("token", response?.user);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error login in", error);
      alert("Register Failed. please try again");
    } finally {
      submitButton.disabled = false;
      submitButton.innerText = "Register";
    }
  });
};
userRegister();
