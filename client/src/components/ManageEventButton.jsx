import React from "react";
import getUserRole from "../provider/userRoleProvider";
import {Link, useNavigate} from 'react-router-dom'

const ManageEventButton = () =>{
    const navigate = useNavigate()
    const isAdmin = getUserRole()

    const handleManageEventButton = () =>{
        navigate('/admin/manage')
    }
    return isAdmin ? <Link><button onClick={handleManageEventButton} className="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600 cursor-pointer font-bold">Manage Event</button></Link> : <Link to='/register'><button className="bg-cyan-500 text-white px-6 py-2 rounded-md hover:bg-cyan-600 cursor-pointer font-bold">Register</button></Link>
}

export default ManageEventButton