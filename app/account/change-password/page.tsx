'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Optional: lucide icons

export default function ChangePasswordForm() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field: keyof typeof showPassword) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>

      {/* Current Password */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Current Password</label>
        <div className="relative">
          <input
            type={showPassword.current ? 'text' : 'password'}
            placeholder="Enter current password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            onClick={() => toggleVisibility('current')}
          >
            {showPassword.current ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
      </div>

      {/* New Password */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">New Password</label>
        <div className="relative">
          <input
            type={showPassword.new ? 'text' : 'password'}
            placeholder="Enter new password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            onClick={() => toggleVisibility('new')}
          >
            {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
      </div>

      {/* Confirm New Password */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-1">Re-Enter New Password</label>
        <div className="relative">
          <input
            type={showPassword.confirm ? 'text' : 'password'}
            placeholder="Enter Re-enter new Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
            onClick={() => toggleVisibility('confirm')}
          >
            {showPassword.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition">
        Change Password
      </button>
    </div>
  );
}
