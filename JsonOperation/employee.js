// Fetching employee data
const FetchEmployeeData = async () => {
  try {
    const response = await fetch("./employee.json");
    return await response.json();
  } catch (error) {
    console.error(`Error fetching employee data: ${error}`);
  }
};

FetchEmployeeData().then((data) => {
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
