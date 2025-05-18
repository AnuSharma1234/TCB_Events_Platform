import { useAuth } from "../provider/authProvider"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const { setToken } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        setToken("this is a test token")
        navigate("/", { replace: true })
    };

    setTimeout(() => {
        handleLogin()
    }, 3 * 1000)

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0d0d] to-[#111] flex items-center justify-center px-4">
            <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl w-full max-w-sm shadow-xl text-gray-200">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-2xl">🌟</div>
                </div>

                {/* Header */}
                <h2 className="text-center text-lg font-semibold">Create your account</h2>
                <p className="text-center text-sm text-gray-400 mb-6">
                    Sign up to get started with Luma.
                </p>

                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-sm mb-1">Full Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="you@email.com"
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label className="block text-sm mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                </div>

                {/* Sign Up Button */}
                <button className="w-full py-2 mt-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
                    Create Account
                </button>

                {/* Divider */}
                <div className="my-4 border-t border-gray-700"></div>

                {/* Google Sign-up */}
                <button className="w-full py-2 bg-gray-800 text-gray-300 font-medium rounded-md flex items-center justify-center hover:bg-gray-700 transition">
                    <span className="mr-2">G</span> Sign up with Google
                </button>
            </div>
        </div>
    )
}

export default Login
