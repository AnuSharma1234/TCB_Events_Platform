import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from '../provider/authProvider';
import { ProtectedRoute } from './ProtectedRoutes';
import { EventsPage } from '../components/EventsPage.jsx';
import Login from '../components/Login.jsx'
import UserProfile from '../components/UserProfile.jsx'


const Routes = () => {
    const { token } = useAuth();

    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/",
                    element: <EventsPage />,
                },
                {
                    path: "/profile",
                    element: <UserProfile />,
                },
            ],
        },
    ];

    const routesForNotAuthenticatedOnly = [
        {
            path: "/login",
            element: <Login />,
        },
    ];

    const router = createBrowserRouter([
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ])

    return <RouterProvider router={router} />;
}

export default Routes;
