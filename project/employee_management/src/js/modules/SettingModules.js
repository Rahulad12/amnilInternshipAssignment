import {
  getUserByIdApi,
  changePasswordApi,
  updateEmailApi,
} from "../api/userApi.js";
import { protectedRoute } from "../component/ProtectedRoute.js";
import { sideBarComponent } from "../component/SideBar.js";
import {
  changePasswordFromHelper,
  changeEmailHelper,
} from "../utils/helper.js";
import { passwordChangeValidator } from "../utils/validator.js";
const userID = localStorage.getItem("token"); //getting id from localStorage

export const settingDashboard = async () => {
  const userByID = await getUserByIdApi(userID); //calling the userdetails of the logged in user
  // this is for side bar
  sideBarComponent();
  //calling api to use the response

  const handlePasswordChange = () => {
    const {
      changePasswordForm,
      oldPasswordInput,
      newPasswordInput,
      confirmPasswordInput,
      changePasswordButton,
    } = changePasswordFromHelper();

    changePasswordForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const oldPassword = oldPasswordInput.value.trim();
      const newPassword = newPasswordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      const errorMessage = passwordChangeValidator(
        oldPassword,
        newPassword,
        confirmPassword
      );
      if (errorMessage) {
        alert(errorMessage);
        return;
      }

      changePasswordButton.disabled = true;
      changePasswordButton.innerText = "Changing...";

      try {
        const response = await changePasswordApi(
          userID,
          newPassword,
          oldPassword
        );

        if (response?.success) {
          alert(response?.message?.message || "Password changed successfully!");
          window.location.href = "/src/screen/employeeDashboard.html";
        } else {
          alert(response?.message);
        }
      } catch (error) {
        alert(error.message);
        console.error("Error changing password:", error);
      } finally {
        changePasswordButton.disabled = false;
        changePasswordButton.innerText = "Change Password";
      }
    });
  };

  const handleEmailChange = async () => {
    const { changeEmailForm, newEmailInput, changeEmailButton } =
      changeEmailHelper();

    newEmailInput.value = userByID?.message?.email;

    changeEmailForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const newEmail = newEmailInput.value.trim();

      changeEmailButton.disabled = true;
      changeEmailButton.innerText = "Changing...";

      try {
        const response = await updateEmailApi(userID, newEmail);

        if (response?.success) {
          alert(response?.message?.message || "Email changed successfully!");
          window.location.href = "/src/screen/employeeDashboard.html";
        } else {
          alert(response?.message);
        }
      } catch (error) {
        alert(error.message);
        console.error("Error changing email:", error);
      } finally {
        changeEmailButton.disabled = false;
        changeEmailButton.innerText = "Change Email";
      }
    });
  };

  //calling the function
  handleEmailChange();
  handlePasswordChange();
};

protectedRoute(settingDashboard);
