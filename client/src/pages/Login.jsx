import { useAuth } from "../provider/authProvider"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import React from "react"
import axios from "axios"
import { toast , ToastContainer } from "react-toastify"


const Login = () => {
    const {setToken} = useAuth()

    const [form , setForm] = useState({
        email : '',
        password : ''
    })

    const handleError = (error) =>{
        toast.error(error ,{
            position : 'top-right'
        })
    }

    const navigate = useNavigate()

    const submit = async e =>{
        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:5000/auth/signin',form)

            setToken(res.data.token)
            if(res.data.isAdmin){
                navigate('/admin')
            }else{
                navigate('/')
            }
       }catch(error){
            console.log(error.message)
            handleError('Incorrect Email or Password!')
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="bg-zinc-900 backdrop-blur-lg p-8 rounded-xl w-full max-w-sm shadow-lg text-gray-200">
                <h2 className="text-center text-lg font-semibold">Login to your account</h2>
                <p className="text-center text-sm text-gray-400 mb-6">
                    we do cool tech events  ; ) 
                </p>

                <form onSubmit={submit}>

                    <div className="mb-4">
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            onChange={(e) => setForm({...form , email : e.target.value})}
                            className="w-full px-4 py-2 bg-zinc-900 text-white rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            onChange={(e) => setForm({...form , password : e.target.value})}
                            className="w-full px-4 py-2 bg-zinc-900 text-white rounded-md border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                        />
                    </div>

                    <button className="cursor-pointer w-full py-2 mt-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
                        type="submit">
                        Login
                    </button>
                </form>
                <div className="my-4 border-t border-gray-700"></div>
                <p>New Here ?</p>
                <Link  to='/signup' className="w-full mt-2 py-2 bg-black text-white font-medium rounded-md flex items-center justify-center hover:bg-gray-950 transition border border-zinc-700">
                    Sign-Up
                </Link>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Login
