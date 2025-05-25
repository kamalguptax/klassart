'use client';
import FilterSidebar from '../components/FilterSidebar';
import Card from '../components/ProductCard';

import React from 'react';

const Products = () => {
const products = [
  {
    title: "Futuristic half-robot tiger in nature",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-01.jpg",
  },
  {
    title: "AI Robot in a Greenhouse",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-02.jpg",
  },
  {
    title: "Cybernetic White Tiger in Field",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-03.jpg",
  },
  {
    title: "Robot & Human Studying Together",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-03.jpg",
  },
  {
    title: "Robot Holding a Butterfly",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-02.jpg",
  },
  {
    title: "Futuristic half-robot tiger again",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-01.jpg",
  },
  {
    title: "Tech Robot in Jungle",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-02.jpg",
  },
  {
    title: "Cyborg Tiger Near River",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-01.jpg",
  },
  {
    title: "AI Companion with Child",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-03.jpg",
  },
  {
    title: "Robot Contemplating Nature",
    author: "Ankit Sharma",
    price: "₹1,899",
    image: "assets/images/product/product-img-01.jpg",
  },
];


  return (
  <div className="p-6 flex gap-6">
      {/* Column 1: Sidebar */}
      <div className="w-72 shrink-0">
        <FilterSidebar />
      </div>

      {/* Column 2: Content area */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">8437 Image result</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search by category, price & more"
            className="border px-4 py-2 rounded-lg w-80"
          />
          <button className="border px-4 py-2 rounded-lg bg-gray-100">
            Short by
          </button>
        </div>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-3 gap-6 space-y-6">
        {products.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Products;