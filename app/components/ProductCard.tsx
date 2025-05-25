"use client";

import React, { useState } from "react";

type CardProps = {
  title: string;
  author: string;
  price: string;
  image: string;
};

export default function ProductCard({ title, author, price, image }: CardProps) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = () => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage("");
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden group relative hover:shadow-lg transition break-inside-avoid">
        <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Hover icons */}
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button
            className="p-2 bg-black bg-opacity-50 rounded-full"
            onClick={handleImageClick}
          >
            <img src="/assets/images/icon/zoom-search.svg" alt="Zoom" />
          </button>
          <button className="p-2 bg-black bg-opacity-50 rounded-full">
            <img src="/assets/images/icon/white-cart.svg" alt="Cart" />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-sm text-gray-700 font-semibold">{title}</h2>
          <p className="text-xs text-gray-500 mt-1">By {author}</p>
          <p className="text-green-600 font-bold mt-2">{price}</p>
          <button className="mt-3 text-white bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Zoomed"
              className="w-full h-auto rounded"
            />
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
