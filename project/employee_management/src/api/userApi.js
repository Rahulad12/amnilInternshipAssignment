import {
  registerUser,loginUser
} from "../../Backend/controllers/authControllers.js";
import { AUTH_URL } from "../constant.js";
export const registerUserApi = async (email, password) => {
  return await registerUser(AUTH_URL, email, password); // Call the regiserUser function as a promise
};

export const loginUserApi = async (email, password) => {
  return await loginUser(AUTH_URL, email, password); // Call the loginUser function as a promise
};
