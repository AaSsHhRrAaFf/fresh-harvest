// src/components/ui/ProductCard.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/feature/cartSlice";

const ProductCard = ({ product, isHighlighted = false }) => {
  const dispatch = useDispatch();
  const [imageError, setImageError] = useState(false);

  // Check if product is defined
  if (!product) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 flex flex-col items-center">
          <div className="bg-gray-50 rounded-lg p-4 w-full flex justify-center items-center h-48 mb-4">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-400">?</span>
            </div>
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-1">
            Product Unavailable
          </h3>
          <p className="text-gray-500 mb-4">$0.00</p>
        </div>
      </div>
    );
  }

  // Alternative approach: use regular img tag for external images instead of Next.js Image
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.productName,
        price: product.price,
        image:
          product.images && product.images.length > 0
            ? product.images[0]
            : null,
        quantity: 1,
      })
    );
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const imageSrc =
    product.images && product.images.length > 0 ? product.images[0] : null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 flex flex-col items-center">
        <div className="bg-gray-50 rounded-lg p-4 w-full flex justify-center items-center h-48 mb-4">
          {imageSrc && !imageError ? (
            // Using regular img tag instead of Next.js Image component
            <img
              src={imageSrc}
              alt={product.productName}
              className="object-contain max-h-32 max-w-full"
              onError={handleImageError}
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-400">
                {product.productName ? product.productName.charAt(0) : "?"}
              </span>
            </div>
          )}
        </div>

        <h3 className="font-semibold text-lg text-gray-900 mb-1">
          {product.productName || "Unknown Product"}a{" "}
        </h3>
        <p className="text-gray-500 mb-4">${product.price || 0}/kg</p>

        <button
          onClick={handleAddToCart}
          className="w-full py-2 px-4 rounded-md transition duration-200

             bg-white text-gray-900 border border-gray-200 hover:text-white hover:bg-orange-600"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
