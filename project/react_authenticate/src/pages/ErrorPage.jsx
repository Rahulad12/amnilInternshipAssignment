import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/errorPage.css"
const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong.</h1>
                <button onClick={() => navigate("/")} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Go Home
                </button>
            </div>
        </div>
    )
}

export default ErrorPage
