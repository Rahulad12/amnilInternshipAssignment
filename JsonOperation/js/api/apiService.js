//path
// const employeesUrl = "../../js/data/employee.json";
const employeesUrl = "../../../JsonOperation/js/data/employee.json";
const reviewsUrl = "../../../JsonOperation/js/data/review.json";

//api calling function
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
