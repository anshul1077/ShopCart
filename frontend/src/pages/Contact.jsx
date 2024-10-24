import React from 'react'

function Contact() {
  return (
    <>
     <div className="min-h-screen bg-purple-600 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-300 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-red-500 mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea 
              rows="4" 
              placeholder="Write your message here..." 
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-gray-500">
            Or reach us directly at:
          </p>
          <p className="text-sm font-medium text-gray-800">
            Email: anshulkatoch1112@gmail.com | Phone: +91 78767 21054
          </p>
        </div>
      </div>
    </div>
    </>

  )
}

export default Contact