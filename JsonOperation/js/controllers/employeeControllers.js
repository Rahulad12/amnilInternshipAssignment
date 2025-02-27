// Fetching employee data
import { fetchEmployees } from "../../../JsonOperation/js/api/apiService.js";
export const Employee = () => {
  fetchEmployees().then((data) => {
    // Sorting the employee data by 'dateOfJoining'
    const recentJoined = data.sort((a, b) => {
      return new Date(b.dateOfJoining) - new Date(a.dateOfJoining);
    });

    // Getting the employee container element
    const employeeContainer = document.getElementById("employee-container");

    // Mapping through the sorted data to generate HTML
    recentJoined?.slice(1, 6).map((emp, index) => {
      const employeeDiv = document.createElement("div");
      employeeDiv.classList.add("emp-card");

      employeeDiv.innerHTML = `
        <div class="emp-card-content">
          <div class="card-head">
            <h2 class="emp-name">${emp.name}</h2>
            <p class="emp-position">${emp.position}</p>
          </div>
          <div class="card-body">
            <p><strong>Employee ID:</strong> ${emp.employeeId}</p>
            <p><strong>Salary:</strong> $${emp.salary.toLocaleString()}</p>
            <p><strong>Date of Joining:</strong> ${new Date(
              emp.dateOfJoining
            ).toLocaleDateString()}</p>
          </div>
        </div>
      `;
      employeeContainer.appendChild(employeeDiv);
    });

    // Getting value of total employees
    const totalEmployee = data?.length;

    const stasContainer = document.getElementById("stas-container");
    stasContainer.innerHTML = `
      <div class="stats-content">
        <p>We have <strong>${totalEmployee}</strong> Employees in the company</p>
      </div>
    `;
  });
};

export const allEmployees = () => {
  fetchEmployees().then((data) => {
    // Returning all employees in a table
    const allEmployeeContainer = document.getElementById(
      "all-employee-container"
    );

    let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Joining Date</th>
        </tr>
      </thead>
      <tbody>
  `;

    // Mapping through all employees and creating table rows
    data.forEach((emp) => {
      tableHTML += `
      <tr>
        <td>${emp.employeeId}</td>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>$${emp.salary.toLocaleString()}</td>
        <td>${new Date(emp.dateOfJoining).toLocaleDateString()}</td>
      </tr>
    `;
    });

    // Closing table tags
    tableHTML += `
    </tbody>
  </table>
  `;

    // Inserting the complete table into the container
    allEmployeeContainer.innerHTML = tableHTML;

    const totalSalary = data?.reduce((acc, emp) => {
      return acc + emp.salary;
    }, 0);

    const totlal_salary_container = document.getElementById("total-salary");
    totlal_salary_container.innerHTML = `
      <p> Total Salary Given to employee is <strong>$${totalSalary}</strong></p>
    `;
  });
};
