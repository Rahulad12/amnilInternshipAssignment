import { responseMessage } from "../component/responseMessage.js";
import { AUTH_URL } from "../constant.js";
export const regiserUser = async (email, password) => {
  const bodyData = {
    email,
    password,
  };
  try {
    const userResponse = await fetch(`${AUTH_URL}`);
    const user = await userResponse.json();

    //check if user already exist
    const existUser = user.find((u) => u.email === email);
    if (existUser) {
      return responseMessage(false, "User already exist");
    }

    //register new user
    const response = await fetch(`${AUTH_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    const result = await response.json();
    return response.ok ? result : responseMessage(false, result.message);
  } catch (error) {
    return responseMessage(false, error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userResponse = await fetch(`${AUTH_URL}`);
    const user = await userResponse.json();

    //check if user exist
    const userExsit = user.find((u) => u.email === email);
    if (!userExsit) {
      return responseMessage(false, "User not found");
    }

    //check password
    const isMatch = userExsit.password === password;
    if (!isMatch) {
      //return error
      return responseMessage(false, "Invalid Credentails");
    }

    //return user details
    return responseMessage(true, {
      user: userExsit.id,
      message: "Login Successfull",
    });
    
  } catch (error) {
    return responseMessage(false, error.message);
  }
};
