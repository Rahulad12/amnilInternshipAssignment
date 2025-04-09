import { createContext, useState, useEffect } from "react";
import { getEmployees } from "../service/employeeService.js";
import useAuth from "../hooks/useAuth";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const { authState } = useAuth();
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        const fetchEmployee = async () => {
            if (!authState.isAuthenticated) return;
            try {
                const response = await getEmployees();
                setEmployee(response?.emp?.[0] || {});
            } catch (error) {
                console.error("Error fetching employee:", error);
                setEmployee({});
            }
        };

        fetchEmployee();
    }, [authState.isAuthenticated]);

    return <EmployeeContext.Provider value={{ employee, setEmployee }}>{children}</EmployeeContext.Provider>;
};
