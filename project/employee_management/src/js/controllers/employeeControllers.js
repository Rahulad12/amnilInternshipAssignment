import { responseMessage } from "../component/responseMessage.js";
import { EMP_URL } from "../constant.js";

export const getEmployee = async (userID) => {
  try {
    const response = await fetch(`${EMP_URL}`);
    const result = await response.json();

    const employee = result.find((emp) => emp.userID === userID);
    if (!employee) return responseMessage(false, "Employee not found");

    return responseMessage(true, employee);
  } catch (error) {
    return responseMessage(false, error.message);
  }
};

