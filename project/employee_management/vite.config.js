import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        dashboard: "/src/screen/employeeDashboard.html",
        setting: "/src/screen/employeeSettingDashboard.html",
        login: "/src/screen/userLogin.html",
        register: "/src/screen/userRegister.html",
        employeeApi: "/src/api/employeeApi.js",
        userApi: "/src/api/userApi.js",
      },
    },
  },
});
