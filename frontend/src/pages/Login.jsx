import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    localStorage.removeItem("userId")
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
        const data = {
            username:email,
            password:password
        };
        console.log(data);
        
        const response = await axios.post('http://localhost:8080/user/login', data);
       // console.log(response.data);
        console.log(response.data.user._id)
        localStorage.setItem("userId",response.data.user._id)
        setMessage('Login successful!');
        navigate('/')
        setEmail('');
        setPassword('');
    } catch (error) {
        if (error.response) {
            
            console.error('Error response:', error.response.data);
            setMessage(error.response.data.message || 'Login failed. Please check your credentials.');
        } else if (error.request) {
            
            console.error('Error request:', error.request);
            setMessage('No response from the server. Please try again later.');
        } else {
           
            console.error('Error message:', error.message);
            setMessage('An unexpected error occurred. Please try again.');
        }
    } finally {
        setIsLoading(false);
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-300">
      <div className="bg-gray-200 shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Welcome Back</h2>
        <p className="text-gray-500 text-center mt-2">Please login to your account</p>
        
        {message && <p className="text-center text-red-500 mt-4">{message}</p>}

        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">UserName</label>
            <input
             type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your Username" 
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your password" 
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-red-500 hover:underline">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-400 transition"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account? <a href="/" className="text-red-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
