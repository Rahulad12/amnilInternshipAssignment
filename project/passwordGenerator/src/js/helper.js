import { generatePassword } from "./controllers/generatePassword.js";

export const getElements = () => {
  const password = document.getElementById("password");
  const passwordLength = document.getElementById("password-length");
  const passwordLengthValue = document.getElementById("password-length-value");
  const uppercase = document.getElementById("uppercase");
  const lowercase = document.getElementById("lowercase");
  const numbers = document.getElementById("numbers");
  const symbols = document.getElementById("symbols");

  return {
    password,
    passwordLength,
    passwordLengthValue,
    uppercase,
    lowercase,
    numbers,
    symbols,
  };
};

export const staticValue = () => {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  return { upperCaseChars, lowerCaseChars, numberChars, symbolChars };
};

export const copyToClipboard = () => {
  const passwordField = document.getElementById("password");
  const copyButton = document.getElementById("copy-password");

  copyButton.addEventListener("click", () => {
    if (
      passwordField.value &&
      passwordField.value !== "Select at least one option!"
    ) {
      navigator.clipboard
        .writeText(passwordField.value)
        .then(() => {
          copyButton.textContent = "Copied!";
          setTimeout(() => {
            copyButton.textContent = "";
          }, 1000);
        })
        .catch(() => {
          console.error("Failed to copy password to clipboard.");
        });
    } else {
      alert("Please generate a password first!");
    }
  });
};

export const refreshPassword = () => {
  const passwordField = document.getElementById("password");
  const refreshButton = document.getElementById("refresh-password");

  refreshButton.addEventListener("click", () => {
    const newPassword = generatePassword();
    passwordField.value = newPassword;
  });
};

export const chageFooterYear = () => {
  const currentYear = new Date().getFullYear();
  const year = document.getElementById("year");
  year.textContent = currentYear;
};

export const measurePasswordStrength = (password) => {
  const passworStrength = document.getElementById("password-strength");
  // console.log(password);
  password = password.trim();

  const length = password.length;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+\-=[\]{}|;:,.<>?]/.test(password);

  console.log(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols);
  if (
    length >= 12 &&
    hasUppercase &&
    hasLowercase &&
    hasNumbers &&
    hasSymbols
  ) {
    passworStrength.textContent = "Strong";
    passworStrength.style.color = "green";
  } else if (
    length >= 8 &&
    hasUppercase &&
    hasLowercase &&
    hasNumbers &&
    hasSymbols
  ) {
    passworStrength.textContent = "Strong";
    passworStrength.style.color = "green";
  } else if (
    length >= 8 &&
    (hasUppercase || hasLowercase || hasNumbers || hasSymbols)
  ) {
    passworStrength.textContent = "Medium";
    passworStrength.style.color = "orange";
  } else {
    passworStrength.textContent = "Weak";
    passworStrength.style.color = "red";
  }
};
