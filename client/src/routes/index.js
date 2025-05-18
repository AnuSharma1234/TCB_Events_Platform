import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useAuth } from "../provider/authProvider"
import { ProtectedRoute } from "./ProtectedRoute"

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
            element: <div>Login</div>
        },
        {
            path: '/signup',
            element: <div>Sign-up</div>
        }
    ]

    const router = createBrowserRouter([
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly
    ])

    return <RouterProvider router={router} />
}

export default Routes
