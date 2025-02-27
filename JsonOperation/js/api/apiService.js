//path
// const employeesUrl = "../../js/data/employee.json";
const employeesUrl = "../../../JsonOperation/js/data/employee.json";
const reviewsUrl = "../../../JsonOperation/js/data/review.json";

//api calling function

/**
 * Fetches all employees from the database and returns them in an array
 * @returns {Promise <Array<Object>>} An array of employee objects
 */
export const fetchEmployees = async () => {
  try {
    const response = await fetch(employeesUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    return `Error Fetching Employee ${error}`;
  }
};

/**
 * Fetches all reviews from the database and returns them in an array
 * @returns {Promise <Array<Object>>} An array of review objects
 */
export const fetchReviews = async () => {
  try {
    const response = await fetch(reviewsUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    return `Error Fetching Review${error}`;
  }
};
