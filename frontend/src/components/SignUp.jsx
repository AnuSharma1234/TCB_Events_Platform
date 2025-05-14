import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

const SignUp = () => {
    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: ""
    })

    const { email, password, username } = inputValue

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }
    const handleSuccess = (message) => {
        toast.success(message, {
            position: "bottom-right"
        })
    }

    const handleError = (message) => {
        toast.error(message, {
            position: "bottom-left",
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:5500/signup", { ...inputValue }, { withCredentials: true })

            const { success, message } = data;

            if (success) {
                handleSuccess(message)
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            } else {
                handleError(message);
            }

        } catch (error) {
            console.log(error)
        }

        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: ""
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0d0d] to-[#111] flex items-center justify-center px-4">
            <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl w-full max-w-sm shadow-xl text-gray-200">
                <div className="flex justify-center mb-6">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-2xl"></div>
                </div>

                <h2 className="text-center text-lg font-semibold">Welcome to TCB Events</h2>
                <form onSubmit={handleSubmit}>
                    <p className="text-center text-sm text-gray-400 mb-6">
                        Please sign up below.
                    </p>

                    <div className="mb-4">
                        <label className="block text-sm mb-1">Username</label>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span></span>
                        </div>
                        <input
                            type="username"
                            placeholder="username"
                            value={username}
                            onChange={handleOnChange}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                        <label className="block text-sm mb-1 mt-4">Email</label>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span></span>
                        </div>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            value={email}
                            onChange={handleOnChange}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                        <label className="block text-sm mb-1 mt-4">Password</label>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span></span>
                        </div>
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={handleOnChange}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>

                    <button className="w-full py-2 mt-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
                        type='submit'>
                        Sign Up
                    </button>
                    <span>
                        Already have and account? <Link to={'/login'}>Login</Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default SignUp
