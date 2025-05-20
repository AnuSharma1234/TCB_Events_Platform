import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

const Signup = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSuccess = (message) => {
        toast.success(message, {
            position: 'top-right'
        })
    }

    const handleError = (error) => {
        toast.error(error, {
            position: 'bottom-left'
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:5000/auth/signup", {
                email,
                password
            })

            setMessage(res.data.message)

            if (res.data.success) {
                handleSuccess(message)
            }
            navigate('/login')

        } catch (error) {
            setMessage(error.res.data.error)
            console.log("Registration Failed Error: ", message)
            handleError(message)
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0d0d] to-[#111] flex items-center justify-center px-4">
                <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl w-full max-w-sm shadow-xl text-gray-200">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-2xl">🔌</div>
                    </div>

                    {/* Header */}
                    <h2 className="text-center text-lg font-semibold">Welcome to TCB Events</h2>
                    <p className="text-center text-sm text-gray-400 mb-6">
                        Please sign up below
                    </p>

                    {/* Email Input */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span></span>
                        </div>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span></span>
                        </div>
                        <input
                            type="password"
                            placeholder="your password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>


                    {/* Continue with Email Button */}
                    <button
                        className="w-full py-2 mt-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
                        onClick={handleSubmit}
                    >
                        Create account
                    </button>

                    {/* Divider */}
                    <div className="my-4 border-t border-gray-700"></div>

                    {/* Google Sign-in */}
                    <button className="w-full py-2 bg-gray-800 text-gray-300 font-medium rounded-md flex items-center justify-center hover:bg-gray-700 transition">
                        Already signed up? <Link to='/login' className="text-blue-500 ml-2"> Login</Link>
                    </button>
                </div>
                <ToastContainer />
            </div>
        </>
    )

}

export default Signup
