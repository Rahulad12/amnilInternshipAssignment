import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        login: "/src/screen/userLogin.html",
        register: "/src/screen/userRegister.html",
        maindashboard: "/src/screen/employeeDashboard.html",
        dashboardsetting: "/src/screen/employeeSettingDashboard.html",
      },
    },
  },
});
