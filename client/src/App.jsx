import React from "react"
import AuthProvider from "./provider/authProvider.jsx"
import Routes from "./routes"
import Navbar from "./components/Navbar.jsx"

function App() {

    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    )
}

export default App
