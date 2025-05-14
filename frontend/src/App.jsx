import { Route } from "react-router-dom"
import Routes from "./routes"
import SignUpCard from "./components/SignUp"
import { EventsPage } from "./components/EventsPage"
import Login from "./components/Login"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<EventsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUpCard />} />
            </Routes>
        </>

    )
}

export default App
