import { useAuth } from "../provider/authProvider"
import { useNavigate } from "react-router-dom"


const Logout = () => {
    const { setToken } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        setToken();
        navigate('/home', { replace: true })
    }

    setTimeout(() => {
        handleLogout()
    }, 3 * 1000)

    return <>Logout Page</>
}

export default Logout
