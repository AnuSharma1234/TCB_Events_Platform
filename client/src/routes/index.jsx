import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useAuth } from "../provider/authProvider.jsx"
import { ProtectedRoute } from "./ProtectedRoute.jsx"
import Signup from "../pages/Signup.jsx"
import Login from "../pages/Login.jsx"

const Routes = () => {
    const { token } = useAuth()

    const routesForAuthenticatedOnly = [
        {
            path: '/',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/',
                    element: <div>Home Page</div>
                },
                {
                    path: '/profile',
                    element: <div>Profile Page</div>
                },
                {
                    path: '/registerEvent',
                    element: <div>Event registration Page</div>
                },
                {
                    path: '/logout',
                    element: <div>Logout Page</div>
                }
            ]
        }
    ]

    const routesForNotAuthenticatedOnly = [
        {
            path: '/home',
            element: <div>View Event</div>
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        }
    ]

    const router = createBrowserRouter([
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly
    ])

    return <RouterProvider router={router} />
}

export default Routes
