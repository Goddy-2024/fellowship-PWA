import React from 'react'
import rhsfLogo from '../assets/rhsfLogo.png'

const LoginPage = () => {
  return (
     <div className="h-screen w-full bg-gradient-to-b from-blue-300 to-blue-700 flex flex-col items-center pt-10 px-4">
      
      {/* Logo */}
      <img
        src={rhsfLogo}  
        alt="RHSF Logo"
        className="w-24 h-24 object-contain mb-6"
      />

      {/* Login Card */}
      <div className="w-full max-w-md bg-gradient-to-b from-blue-200/40 to-blue-700/40 backdrop-blur-md rounded-3xl p-6 shadow-lg">
        
        <p className="text-center text-white text-sm tracking-wide">WELCOME</p>
        <h1 className="text-center text-3xl font-bold text-white mt-1">LOGIN</h1>

        {/* Username */}
        <label className="block text-sm font-semibold text-white mt-6">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full mt-1 p-3 rounded-lg bg-white text-gray-700 outline-none"
        />

        {/* Password */}
        <label className="block text-sm font-semibold text-white mt-4">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mt-1 p-3 rounded-lg bg-white text-gray-700 outline-none"
        />

        {/* Button */}
        <button className="w-full mt-6 p-3 rounded-lg bg-gray-300 text-gray-700 font-semibold">
          Sign In
        </button>

        {/* Scripture */}
        <p className="text-center text-white text-sm italic mt-3">
          Prepare the way (Isaiah 40:3)
        </p>

        <div className="border-t border-white/50 mt-5 pt-4">
          <p className="text-center text-white text-xs leading-tight">
            fellowship-admin v2.1.0 (2025-09-02) © Allure<br />
            Graphics distributions
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
