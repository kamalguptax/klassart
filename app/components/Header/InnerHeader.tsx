'use client';

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

// Avatar Dropdown Component
const AvatarDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logged out!");
    setShowModal(false);
    localStorage.removeItem("isLoggedIn");
    window.location.href = "http://192.168.31.88:3000/";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold cursor-pointer"
      >
        A
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[260px] bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul>
            <li>
              <Link href="/account" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <img src="/assets/images/icon/profile.svg" alt="" className="mr-2" />
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/account/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <img src="/assets/images/icon/dashboard.svg" alt="" className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/account/my-plan" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <img src="/assets/images/icon/myplan.svg" alt="" className="mr-2" />
                My Plan
              </Link>
            </li>
            <li>
              <Link href="/account/order-history" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <img src="/assets/images/icon/orderhistory.svg" alt="" className="mr-2" />
                My Order History
              </Link>
            </li>
            <li>
              <Link href="/account/notifications" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <img src="/assets/images/icon/notification.svg" alt="" className="mr-2" />
                Notification
              </Link>
            </li>
            <li>
              <Link href="/account/change-password" className="flex items-center px-4 py-2 hover:bg-gray-100">
                <img src="/assets/images/icon/changepassword.svg" alt="" className="mr-2" />
                Change Password
              </Link>
            </li>
            <li
              onClick={() => setShowModal(true)}
              className="flex items-center text-red-500 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src="/assets/images/icon/logout.svg" alt="" className="mr-2" />
              Logout
            </li>
          </ul>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
              <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Logout</h2>
                <p className="mt-2 text-gray-600 text-sm">
                  Are you sure you want to logout? Once you logout you need to login again. Are you OK?
                </p>

                <div className="mt-6 flex justify-center gap-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-5 py-2 rounded-md border text-gray-500 bg-gray-100 hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-5 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"
                  >
                    Logout!
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Header Component
const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-300">
      
       <Link href="/" className="text-3xl font-bold">
        <img src="/assets/images/logo.svg" alt="Logo" />
      </Link>
      <div className="flex items-center space-x-6">
        {/* Navigation */}
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/account/dashboard" className="text-gray-800 px-4 hover:text-indigo-600">
              Dashboard
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 hover:text-indigo-600 flex items-center"
            >
              Services
              <svg className="w-4 h-4 ml-2 mt-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6"></path>
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute z-50 mt-2 w-[260px] bg-white rounded-md shadow-lg">
                <li>
                  <Link href="/TextToImage" className="block px-4 py-2 hover:bg-gray-100">
                    Text to Image
                  </Link>
                </li>
                <li>
                  <Link href="/ImageToImage" className="block px-4 py-2 hover:bg-gray-100">
                    Image to Image
                  </Link>
                </li>
                <li>
                  <Link href="/text-behind-image" className="block px-4 py-2 hover:bg-gray-100">
                    Text Behind Image
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/products" className="text-gray-800 px-4 hover:text-indigo-600">
              Products
            </Link>
          </li>
          <li>
            <Link href="/subscription" className="text-gray-800 px-4 hover:text-indigo-600">
              Subscription
            </Link>
          </li>
          <li>
            <Link href="/cart" className="flex items-center text-gray-800 px-4 hover:text-indigo-600">
              <img src="/assets/images/icon/cart.svg" alt="Cart" className="w-5 h-5 mr-2" />
              Cart
            </Link>
          </li>
        </ul>

        {/* Upgrade */}
        <Link href="/account/my-plan">
          <div className="flex items-center cursor-pointer">
            <img src="/assets/images/icon/win.svg" alt="Upgrade" className="w-5 h-5 mr-2" />
            <span className="text-sm text-gray-800">Upgrade</span>
          </div>
        </Link>

        {/* Avatar */}
        <AvatarDropdown />
      </div>
    </header>
  );
};

export default Header;
