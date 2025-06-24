"use client";
import React, { useState } from 'react';
import '../globals.css'; 
function AuthPage() {
  const [isRegister, setIsRegister] = useState(true);
  const [profilePic, setProfilePic] = useState(null);

  const handleImageChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center">
          {isRegister ? 'Create an Account' : 'Login to Your Account'}
        </h2>

        {isRegister && (
          <div className="flex flex-col items-center">
            <label className="cursor-pointer mb-2">
              <input type="file" className="hidden" onChange={handleImageChange} />
              <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-400">Upload</span>
                )}
              </div>
            </label>
            <p className="text-sm text-gray-400">Profile Photo</p>
          </div>
        )}

        <form className="space-y-4">
          {isRegister && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="College or Company"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Interests"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-400">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="text-blue-400 hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
