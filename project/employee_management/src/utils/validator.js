export const passwordChangeValidator = (...data) => {
  const [oldPassword, newPassword, confirmPassword] = data;
  console.log(oldPassword, newPassword, confirmPassword);

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

  if (!oldPassword || !newPassword || !confirmPassword)
    return "All fields are required";

  if (oldPassword === newPassword)
    return "New password cannot be the same as the old password";
  if (newPassword !== confirmPassword) return "Passwords do not match";

  if (!passwordRegex.test(newPassword))
    return "Password Should be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.";

  return null;
};

export const emailAndPasswordValidator = (email, password) => {
  if (!email || !password) {
    return "Please enter both email and password";
  }

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,4}$/;
  const isValidEmail = emailRegex.test(email);

  if (!isValidEmail) {
    return "Email is not valid";
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const isValidPassword = passwordRegex.test(password);

  if (!isValidPassword) {
    return "Password Should be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.";
  }
  return null;
};
