import { createContext, useEffect, useState } from "react";
import { login, getUser, logout } from "../service/authService.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialAuthState = {
        token: localStorage.getItem("token") || null,
        role: localStorage.getItem("role") || null,
        isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
        isFormSubmitted: JSON.parse(localStorage.getItem("isFormCompleted")) || false,
        loading: false,
        message: null,
    };

    const [authState, setAuthState] = useState(initialAuthState);

    const loginUser = async (bodyData) => {
        try {
            setAuthState((prev) => ({ ...prev, loading: true, message: null }));

            const response = await login(bodyData);
            if (!response.success) throw new Error(response.message);

            const { token, role, isAuthenticated, isFormCompleted } = response.user;
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
            localStorage.setItem("isFormCompleted", JSON.stringify(isFormCompleted));

            setAuthState({ token, role, isAuthenticated, isFormSubmitted: isFormCompleted, loading: false, message: response.message });
            return true;
        } catch (error) {
            setAuthState((prev) => ({ ...prev, isAuthenticated: false, loading: false, message: error.message }));
            return false;
        }
    };

    const getUserDetails = async () => {
        try {
            const response = await getUser();
            if (response.success) {
                setAuthState((prev) => ({ ...prev, isFormSubmitted: response.user.isFormCompleted }));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const logOut = async () => {
        try {
            await logout();
            localStorage.clear();
            setAuthState({ token: null, role: null, isAuthenticated: false, isFormSubmitted: false, loading: false, message: null });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (authState.isAuthenticated) getUserDetails();
    }, [authState.isAuthenticated]);

    return <AuthContext.Provider value={{ authState, loginUser, logOut, getUserDetails }}>{children}</AuthContext.Provider>;
};
