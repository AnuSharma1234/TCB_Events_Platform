import React from 'react'
import { Link } from 'react-router-dom'

const EventButton = () =>{
    const token = localStorage.getItem('token')

    return token ? <Link className='text-white' to='/'>Events</Link> : <Link to='/login'>Events</Link>

}

export default EventButton