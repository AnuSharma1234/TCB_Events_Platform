import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { useAuth } from '../provider/authProvider.jsx'

const Signup = () => {
    const {setToken} = useAuth()
    const [data , setData] = useState({
        name : '',
        email : '',
        password : ''
    })

    const handleFailedLogin = (message) =>{
        toast.error(message, {
            position: 'top-right',
        })
    }

    const navigate = useNavigate()

    const submit = async e  =>{
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:5000/auth/signup',data)

            if(res.data.sucess){
                setToken(res.data.token)
                navigate('/')
            }else{
                handleFailedLogin(res.data.message)
                navigate('/login')
            }
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-black via-[#0d0d0d] to-[#111] flex items-center justify-center px-4">
                <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl w-full max-w-sm shadow-xl text-gray-200">
                    <div className="flex justify-center mb-6">
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-2xl">🔌</div>
                    </div>

                    <ToastContainer/>
                    <h2 className="text-center text-lg font-semibold">Welcome to TCB Events</h2>
                    <p className="text-center text-sm text-gray-400 mb-6">
                        Please sign up below
                    </p>

                    <form onSubmit={submit}>
                    <div className="mb-4">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span></span>
                        </div>
                        <input
                            type="text"
                            placeholder="username"
                            onChange={(e) => setData({...data , name: e.target.value})}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                            <span></span>
                        </div>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            onChange={(e) => setData({...data , email : e.target.value})}
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
                            onChange={(e) => setData({...data , password : e.target.value})}
                            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
                    </div>


                    <button
                        className="w-full py-2 mt-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
                        type="submit"
                    >
                        Create account
                    </button>
                    </form>

                    <div className="my-4 border-t border-gray-700"></div>

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
