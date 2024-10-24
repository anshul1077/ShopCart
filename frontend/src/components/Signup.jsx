import React from 'react'

function Signup() {
    return (
        <div className="flex bg-gray-100">
            <div className="w-1/2 bg-white flex flex-col items-center justify-center py-16">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Create an Account</h2>
                <form className="w-3/4 space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password" e
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
            </div>

            <div className="w-1/2 bg-red-500 text-white flex flex-col items-center justify-center p-8">
                <h2 className="text-4xl font-bold mb-6">Get in Touch with Us</h2>
                <p className="text-lg text-center mb-4">
                    We are excited to hear from you! Contact us to learn more about our products and services or for any inquiries.
                </p>
                <p className="text-lg mb-2">Email: support@ecommerce.com</p>
                <p className="text-lg">Phone: +1 (555) 123-4567</p>
            </div>
        </div>
    )
}

export default Signup