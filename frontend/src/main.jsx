import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider , Route, createRoutesFromElements } from 'react-router-dom'
import EventsPage from './components/EventsPage.jsx'
import CreateEventForm from './components/CreateEventFrom.jsx'
import UserProfile from './components/UserProfile.jsx'
import Layout from './layout.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<Layout/>}>
            <Route path='' element={<EventsPage/>}/>
            <Route path='createEvent' element={<CreateEventForm/>}/>
            <Route path='userProfile' element={<UserProfile/>}/>
        </Route>
    )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
 </StrictMode>,
)
