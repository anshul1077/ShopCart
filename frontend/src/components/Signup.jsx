import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setMessage('');
    }, []);

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        try {
            const data = { username: fullName, email: email, password: password };
            console.log(data);
            const response = await axios.post('http://localhost:8080/user/signup', data);
            console.log(response.data);
            setMessage('Account created successfully!');
            setFullName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            
            if (error.response) {
               
                console.error('Error response:', error.response.data);
                setMessage(error.response.data.message || 'Signup failed. Please check your input.');
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
        <div className="flex bg-gray-100">
            <div className="w-1/2 bg-white flex flex-col items-center justify-center py-16">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Create an Account</h2>
                {message && <p className="text-center text-red-500">{message}</p>}
                <form onSubmit={handleSignup} className="w-3/4 space-y-4">
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300"
                    >
                        {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
            </div>

            <div className="w-1/2 bg-red-500 text-white flex flex-col items-center justify-center p-8">
                <h2 className="text-4xl font-bold mb-6">Get in Touch with Us</h2>
                <p className="text-lg text-center mb-4">
                    We are excited to hear from you! Contact us to learn more about our products and services or for any inquiries.
                </p>
                <p className="text-lg mb-2">Email: anshulkatoch1112@gmail.com</p>
                <p className="text-lg">Phone: +91 78767 21054</p>
            </div>
        </div>
    );
}

export default Signup;
