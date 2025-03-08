import { getEmployee } from "../controllers/employeeControllers.js";

export const getEmployeeApi = async (userID) => {
  return await getEmployee(userID);
};
