import React from 'react'

function Login() {
  return (
    <>
      <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-300">
    
      <div className="bg-gray-200 shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Welcome Back</h2>
        <p className="text-gray-500 text-center mt-2">Please login to your account</p>
        
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your email" 
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your password" 
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-red-500 hover:underline">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-400 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account? <a href="/" className="text-red-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
      </>
  )
}

export default Login