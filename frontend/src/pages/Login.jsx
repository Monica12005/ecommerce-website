
import React, { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {

  const navigate = useNavigate()

  const { token, setToken, backendUrl } = useContext(ShopContext)

  const [currentState, setCurrentState] = useState("Login")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (currentState === "Sign Up") {

        const response = await axios.post(
          backendUrl + "/api/user/register",
          { name, email, password }
        )

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
        } else {
          toast.error(response.data.message)
        }

      } else {

        const response = await axios.post(
          backendUrl + "/api/user/login",
          { email, password }
        )

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
        } else {
          toast.error(response.data.message)
        }

      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token])

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-full max-w-md m-auto gap-5 text-gray-800 bg-white/40 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60 p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_40px_rgb(94,96,206,0.15)] hover:bg-white/50"
      >

        {/* HEADER */}
        <div className="inline-flex flex-col items-center gap-2 mb-6 mt-2">
          <p className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a2e] to-[#5e60ce]">{currentState}</p>
          <span className="h-[4px] w-12 bg-[#5e60ce] rounded-full"></span>
        </div>

        {/* INPUTS */}
        {currentState === "Sign Up" && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            type="text"
            placeholder="Username"
            className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-md border border-white/80 text-gray-900 rounded-xl focus:ring-4 focus:ring-[#5e60ce]/20 focus:border-[#5e60ce] transition-all outline-none shadow-inner"
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          type="email"
          placeholder="Email Address"
          className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-md border border-white/80 text-gray-900 rounded-xl focus:ring-4 focus:ring-[#5e60ce]/20 focus:border-[#5e60ce] transition-all outline-none shadow-inner"
        />

        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-md border border-white/80 text-gray-900 rounded-xl focus:ring-4 focus:ring-[#5e60ce]/20 focus:border-[#5e60ce] transition-all outline-none shadow-inner"
        />

        {/* SECONDARY ACTIONS */}
        <div className="w-full flex justify-between text-[13px] font-semibold text-gray-600 mt-2 px-1">
          <p className="cursor-pointer hover:text-[#5e60ce] transition-colors">Forgot password?</p>

          {currentState === "Login" ? (
            <p
              className="cursor-pointer hover:text-[#5e60ce] transition-colors"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create an account
            </p>
          ) : (
            <p
              className="cursor-pointer hover:text-[#5e60ce] transition-colors"
              onClick={() => setCurrentState("Login")}
            >
              Log in instead
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button className="bg-[#5e60ce] hover:bg-[#4a4c9c] text-white font-bold tracking-wide w-full py-4 mt-6 rounded-xl shadow-[0_8px_15px_rgb(94,96,206,0.3)] hover:shadow-[0_12px_25px_rgb(94,96,206,0.5)] hover:-translate-y-1 transition-all duration-300">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>

      </form>
    </div>
  )
}

export default Login