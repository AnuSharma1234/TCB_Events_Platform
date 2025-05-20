import React from "react"
import AuthProvider from "./provider/authProvider.jsx"
import Routes from "./routes"
import { ToastContainer } from "react-toastify"

function App() {
    return (
        <>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </>
    )
}

export default App
