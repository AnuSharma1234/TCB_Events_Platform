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

    const handleError = (message) =>{
        toast.error(message, {
            position: 'top-right',
        })
    }

    const navigate = useNavigate()

    const submit = async e  =>{
        e.preventDefault();
        try{
            const res = await axios.post('http://localhost:5000/auth/signup',data)

            if(res.data.success){
                setToken(res.data.token)
                navigate('/')
            }else{
                handleError(res.data.message)
                navigate('/login')
            }
        }catch(error){
            console.log(error)
            handleError('Failed to Sign-Up')
        }
    }

    return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4">
                <div className="bg-zinc-900 backdrop-blur-lg p-8 rounded-xl w-full max-w-sm shadow-lg text-gray-200">
                    <h2 className="text-center text-lg font-semibold">Welcome to EventBreakers</h2>
                    <p className="text-center text-sm text-gray-400 mb-6">
                        Please sign up below
                    </p>

                    <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Username</label>
                       <input
                            type="text"
                            placeholder="username"
                            onChange={(e) => setData({...data , name: e.target.value})}
                            className="w-full px-4 py-2 bg-zinc-900 text-white rounded-md border  border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Email</label>
                       <input
                            type="email"
                            placeholder="you@email.com"
                            onChange={(e) => setData({...data , email : e.target.value})}
                            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Password</label>
                       <input
                            type="password"
                            onChange={(e) => setData({...data , password : e.target.value})}
                            className="w-full px-4 py-2 bg-zinc-900 text-white rounded-md border border-zinc-700 focus:outline-none focus:ring-2  focus:ring-zinc-500"
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
                    <p>Already have an account ?</p>
                    <Link to='/login' className="mt-2 w-full py-2 border border-zinc-700 bg-black text-white font-medium rounded-md flex items-center justify-center hover:bg-gray-950 transition">
                        Login
                    </Link>
                </div>
                <ToastContainer />
            </div>
    )

}

export default Signup
