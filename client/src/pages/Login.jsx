import { useAuth } from "../provider/authProvider"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import React from "react"
import axios from "axios"


const Login = () => {
    const {setToken} = useAuth()

    const [form , setForm] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate()

    const submit = async e =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/auth/signin',form)
        setToken(res.data.token)
        if(res.data.user.role){
            navigate('/adminDashboard')
        }else{
            navigate('/')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0d0d] to-[#111] flex items-center justify-center px-4">
            <ToastContainer />
            <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl w-full max-w-sm shadow-xl text-gray-200">
                <div className="flex justify-center mb-6">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-2xl">🌟</div>
                </div>

                <h2 className="text-center text-lg font-semibold">Login to your TCB account</h2>
                <p className="text-center text-sm text-gray-400 mb-6">
                    we do cool tech events  : )
                </p>

                <form onSubmit={submit}>

                    <div className="mb-4">
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            onChange={(e) => setForm({...form , email : e.target.value})}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="your password"
                            onChange={(e) => setForm({...form , password : e.target.value})}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>

                    <button className="cursor-pointer w-full py-2 mt-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
                        type="submit">
                        Login
                    </button>
                </form>
                <div className="my-4 border-t border-gray-700"></div>

                <button className="w-full py-2 bg-gray-800 text-gray-300 font-medium rounded-md flex items-center justify-center hover:bg-gray-700 transition">
                    New here ? <Link className="ml-2 text-blue-500" to='/signup'>Sign-Up</Link>
                </button>
            </div>
        </div>
    )
}

export default Login
