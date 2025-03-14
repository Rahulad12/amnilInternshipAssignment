const authformHelper = () => {
  const authForm = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const submitButton = document.getElementById("submit-button");

  return { authForm, emailInput, passwordInput, submitButton };
};

const resetForm = (...data) => {
  data.forEach((element) => {
    element.value = "";
  });
  return data;
};

const changePasswordFromHelper = () => {
  const changePasswordForm = document.getElementById("change-password-form");
  const oldPasswordInput = document.getElementById("old-password");
  const newPasswordInput = document.getElementById("new-password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const changePasswordButton = document.getElementById("change-password-btn");

  return {
    changePasswordForm,
    oldPasswordInput,
    newPasswordInput,
    confirmPasswordInput,
    changePasswordButton,
  };
};

const changeEmailHelper = () => {
  const changeEmailForm = document.getElementById("change-email-form");
  const newEmailInput = document.getElementById("email");
  const changeEmailButton = document.getElementById("change-email-btn");

  return { changeEmailForm, newEmailInput, changeEmailButton };
};
 const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};
const passwordErrorMessage = (message) => {
  const errorElement = document.getElementById("password-error-message");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.display = message ? "block" : "none";
};
const emailErrorMessage = (message) => {
  const errorElement = document.getElementById("email-error-message");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.display = message ? "block" : "none";
};
const errorMessage = (message) => {
  const errorElement = document.getElementById("error-message");
  errorElement.textContent = message.message;
  errorElement.style.color = message.success ? "green" : "red";
  errorElement.style.display = message.message ? "block" : "none";
};

export {
  authformHelper,
  resetForm,
  changePasswordFromHelper,
  changeEmailHelper,
  isLoggedIn,
  passwordErrorMessage,
  emailErrorMessage,
  errorMessage,
};
