import React from "react";
import getUserRole from "../provider/userRoleProvider";
import { Link } from "react-router-dom";

const CreateEventButton = () =>{
    const isAdmin = getUserRole()

    return isAdmin ? <Link className="text-white" 
    to='/admin/createEvent'>Create Event</Link> : ''

}

export default CreateEventButton