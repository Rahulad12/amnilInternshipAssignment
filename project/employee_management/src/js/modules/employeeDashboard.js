import { getEmployeeApi } from "../apiService/employeeApi.js";
import { protectedRoute } from "../component/protectedRoute.js";
import { sideBarComponent } from "../component/sideBar.js";

const content = document.getElementById("content");

const userID = localStorage.getItem("token");
console.log(userID);

export const employeeDashboard = async () => {
  sideBarComponent(
    `<li><a href="/src/screen/employeeDashboard.html">Dashboard</a></li>`,
    `<li><a href="#" id="logout">Logout</a></li>`
  );

  // Fetch employee details for dashboard content
  const employee = await getEmployeeApi(userID); // Fetch employee details

  content.innerHTML = ` 
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h2>Welcome, ${employee.message.name}</h2>
        <p>Your Employee Dashboard</p>
      </div>
      
      <div class="dashboard-card-container">
        <div class="dashboard-card">
          <h3>Position</h3>
          <p>${employee.message.position}</p>
        </div>

        <div class="dashboard-card">
          <h3>Department</h3>
          <p>${employee.message.department}</p>
        </div>

        <div class="dashboard-card">
          <h3>Salary</h3>
          <p>$${employee.message.salary}</p>
        </div>

        <div class="dashboard-card">
          <h3>Joining Date</h3>
          <p>${employee.message.joiningDate}</p>
        </div>
      </div>
    </div>
  `;
};

// Pass function reference, NOT execution
protectedRoute(employeeDashboard);
