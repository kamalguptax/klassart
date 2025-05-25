'use client';

import React from 'react';
const items = [1, 2, 3]; // Simulated cart items

const cart = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-semibold">
        Cart <span className="text-sm font-normal text-gray-500">({items.length} items)</span>
      </h2>
      <button className="flex items-center gap-1 text-red-600 border border-red-300 px-4 py-2 rounded-md shadow-sm hover:bg-red-50 transition">
        🗑️ Empty cart
      </button>
    </div>

    {items.map((item, index) => (
      <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg mb-4 shadow-sm relative">
        <img
          src="/saraswati.png" // Replace with actual image path
          alt="Art"
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-medium mb-1">Goddess Saraswati Kalighat Art Painting</h3>
          <p className="text-sm text-gray-500">Size: 50 x 40 inches</p>
          <p className="text-green-600 font-semibold text-lg mt-2">
            ₹5,499.00 <span className="text-gray-400 text-sm font-normal">(inclusive of taxes)</span>
          </p>
        </div>
        <button className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-lg">🗑️</button>
      </div>
    ))}
  </div>
  );
};

export default cart;