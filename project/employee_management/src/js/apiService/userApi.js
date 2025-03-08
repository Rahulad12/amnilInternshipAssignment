import { regiserUser } from "../controllers/authControllers.js";
import { loginUser } from "../controllers/authControllers.js";

export const registerUserApi = async (email, password) => {
  return await regiserUser(email, password);
};

export const loginUserApi = async (email, password) => {
  return await loginUser(email, password);
};
