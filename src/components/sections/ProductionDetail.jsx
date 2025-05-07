// src/components/sections/ProductDetailSection.jsx
import React, { useState } from "react";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  
  // Handle quantity change
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Parse product data or use defaults if not available
  const {
    productName = "Unknown Product",
    price = 0,
    description = "No description available",
    images = [],
    categoryId = ""
  } = product || {};

  // Get first image or placeholder
  const mainImage = images && images.length > 0 
    ? images[0] 
    : "https://via.placeholder.com/400";

  return (
    <section className="py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Product Display Row */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Side: Product Image */}
          <div className="w-full md:w-5/12">
            <div className="border border-[#E9E9E9] rounded-2xl p-6 relative">
              <div className="aspect-square relative">
                <Image 
                  src={mainImage}
                  alt={productName}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Pagination Dots */}
              <div className="flex justify-center mt-5 space-x-3">
                <button className="w-2.5 h-2.5 rounded-full bg-[#8CA36A]" aria-label="View image 1"></button>
                <button className="w-2.5 h-2.5 rounded-full bg-gray-300" aria-label="View image 2"></button>
                <button className="w-2.5 h-2.5 rounded-full bg-gray-300" aria-label="View image 3"></button>
              </div>
            </div>
          </div>
          
          {/* Right Side: Product Details */}
          <div className="w-full md:w-7/12">
            {/* Category Label */}
            <div className="inline-block bg-[#EDF7E4] text-[#8CA36A] text-sm font-semibold py-1 px-4 rounded-full mb-4">
              Fruits
            </div>
            
            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#23233B] mb-2">
              {productName}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="ml-2 text-gray-700">
                <span className="font-bold">5.0</span> 
                <span className="text-[#757575]">(1 review)</span>
              </span>
            </div>
            
            {/* Price */}
            <p className="text-2xl font-bold text-[#FF6C0E] mb-4">${price}/kg</p>
            
            {/* Product Description - Short version */}
            <p className="text-[#757575] mb-6 text-base leading-relaxed">
              From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, 
              offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, 
              coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, 
              or even for a refreshing drink straight from the shell.
            </p>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="font-medium text-[#23233B] mr-3">Quantity</span>
              <button 
                onClick={decreaseQuantity}
                className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-md"
              >
                -
              </button>
              <span className="mx-3 font-medium w-6 text-center">{quantity}</span>
              <button 
                onClick={increaseQuantity}
                className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-md"
              >
                +
              </button>
              <span className="ml-3 text-gray-500">/kg</span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center justify-center gap-2 bg-[#F4F4F4] text-[#8E9299] py-3 px-5 rounded-md font-medium">
                <FaHeart className="text-gray-500" /> Save as favorite
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#FF6C0E] text-white py-3 px-6 rounded-md font-medium flex-grow">
                <FaShoppingCart /> Add to cart
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="mt-10">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-4">
            <button 
              onClick={() => setActiveTab("description")} 
              className={`py-2 px-6 rounded-lg font-medium ${
                activeTab === "description" 
                  ? "bg-[#8CA36A] text-white" 
                  : "bg-white text-[#8E9299] border border-[#E9E9E9]"
              }`}
            >
              Description
            </button>
            <button 
              onClick={() => setActiveTab("reviews")} 
              className={`py-2 px-6 rounded-lg font-medium ${
                activeTab === "reviews" 
                  ? "bg-[#8CA36A] text-white" 
                  : "bg-white text-[#8E9299] border border-[#E9E9E9]"
              }`}
            >
              Reviews (1)
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="bg-[#F4F4F4] rounded-xl p-6 md:p-8">
            {activeTab === "description" && (
              <div className="text-[#757575] space-y-4">
                <p>
                  {description}
                </p>
                <p>
                  Our coconuts are sustainably grown, ensuring the best quality and taste. 
                  Each coconut is handpicked and carefully prepared, offering you the freshest 
                  product possible. Rich in healthy fats, electrolytes, and essential nutrients, 
                  coconuts provide both hydration and nourishment. Whether you're using the water, 
                  flesh, or milk, our coconuts bring versatility to your kitchen while supporting 
                  healthy living.
                </p>
                <p>
                  Perfect for smoothies, desserts, curries, and more — let the natural sweetness 
                  of the coconut elevate your recipes. Enjoy the tropical goodness in its purest form, 
                  directly from nature.
                </p>
              </div>
            )}
            
            {activeTab === "reviews" && (
              <div className="text-[#757575]">
                <p>Customer reviews will be displayed here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
