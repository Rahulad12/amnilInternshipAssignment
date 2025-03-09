import { responseMessage } from "../utils/ResponseMessage";

export const regiserUser = async (url, email, password) => {
  if (!email || !password) {
    return responseMessage(false, "Please enter both email and password");
  }

  try {
    const bodyData = {
      email,
      password,
    };

    const userResponse = await fetch(url);
    const user = await userResponse.json();

    //check if user already exist
    const existUser = user.find((u) => u.email === email);
    if (existUser) {
      return responseMessage(false, "User already exist");
    }

    //register new user
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    const result = await response.json();
    return response.ok
      ? responseMessage(true, {
          user: result.id,
          message: "Register Successfull",
        })
      : responseMessage(false, result.message);
  } catch (error) {
    return responseMessage(false, error.message);
  }
};

export const loginUser = async (url, email, password) => {
  if (!email || !password) {
    return responseMessage(false, "Please enter both email and password");
  }
  try {
    const userResponse = await fetch(url);
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
