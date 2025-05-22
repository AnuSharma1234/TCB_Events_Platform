import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { useAuth } from "../provider/authProvider.jsx"
import { ProtectedRoute } from "./ProtectedRoute.jsx"
import Signup from "../pages/Signup.jsx"
import Login from "../pages/Login.jsx"
import Home from "../pages/Home.jsx"
import AdminDashboard from '../adminPages/AdminDashboard.jsx'
import CreateEvent from '../adminPages/CreateEvent.jsx'
import {AdminRoute} from '../routes/AdminRoute.jsx'


const Routes = () => {
    const { token } = useAuth()

    const routesForAuthenticatedOnly = [
        {
            path: '/',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/',
                    element: <Home/>
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
                },
                {
                    path : '/admin',
                    element : <AdminRoute/>,
                    children : [
                        {
                            path : '/admin',
                            element : <AdminDashboard/> 
                        },
                        {
                            path : '/admin/createEvent',
                            element : <CreateEvent/>
                        },
                        {
                            path : '/admin/manageEvent',
                            element : <div>Manage Event</div>
                        },
                        {
                            path : '/admin/editEvent',
                            element : <div>Edit Event</div>
                        },
                        {
                            path : '/admin/deleteEvent',
                            element : <div>Confirm Delete Event</div> 
                        }
                    ]
                }
            ]
        }
    ]

    const routesForNotAuthenticatedOnly = [
        {
            path: '/',
            element: <div>Home : not authenticated</div>
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
