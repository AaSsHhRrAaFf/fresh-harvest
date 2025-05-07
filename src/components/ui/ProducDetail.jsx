// src/components/ui/ProductDetail.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://code-commando.com/api/v1/products/${productId}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          setProduct(result.data);
        } else {
          throw new Error(result.message || "Failed to fetch product details");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleQuantityChange = (action) => {
    if (action === "decrease") {
      setQuantity(Math.max(1, quantity - 1));
    } else if (action === "increase") {
      setQuantity(Math.min(product?.stock || 10, quantity + 1));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-[#8CA36A] font-medium">
          Loading product details...
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500">{error || "Product not found"}</div>
      </div>
    );
  }

  // Default category name if no specific mapping is needed
  const categoryName = "Fruits";

  return (
    <div className="container mx-auto max-w-6xl px-4 py-9">
      {/* Product Display Row - Main Section */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side - Image Carousel */}
        <div className="w-full md:w-5/12">
          <div className="border border-[#E9E9E9] rounded-2xl p-6 relative flex flex-col items-center">
            <div className="w-full aspect-square relative flex items-center justify-center">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[activeImageIndex]}
                  alt={product.productName}
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="bg-gray-100 w-full aspect-square flex items-center justify-center rounded-lg">
                  <span className="text-gray-400 text-lg">
                    No image available
                  </span>
                </div>
              )}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-3 mt-5">
              {product.images &&
                product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === activeImageIndex
                        ? "bg-[#8CA36A]"
                        : "bg-gray-300"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}

              {/* If no images, show placeholder dots */}
              {(!product.images || product.images.length === 0) && (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8CA36A]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-7/12">
          {/* Category Label */}
          <span className="inline-block bg-[#EDF7E4] text-[#8CA36A] text-sm font-medium py-1 px-4 rounded-full mb-4">
            {categoryName}
          </span>

          {/* Product Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#23233B] mb-2">
            {product.productName}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm">
              <span className="font-bold">5.0</span>{" "}
              <span className="text-gray-500">(1 review)</span>
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-[#FF6C0E] mb-4">
            ${product.price || 0}/kg
          </p>

          {/* Product Description - Short Version */}
          <p className="text-[#757575] mb-6 max-w-xl">
            From our farm directly to your door, our fresh{" "}
            {product.productName.toLowerCase()} are harvested at the peak of
            ripeness, offering you a sweet, hydrating treat full of flavor.
            Packed with natural nutrients, perfect for a variety of culinary
            uses.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <span className="font-medium text-[#23233B] mr-4">Quantity</span>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-md"
                aria-label="Decrease quantity"
              >
                <span className="text-xl">-</span>
              </button>
              <span className="w-10 text-center font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-md"
                aria-label="Increase quantity"
              >
                <span className="text-xl">+</span>
              </button>
              <span className="ml-2 text-gray-500">/kg</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#F4F4F4] text-[#8E9299] font-medium px-6 py-3 rounded-md transition hover:bg-gray-200">
              <FiHeart className="text-[#8E9299]" />
              Save as favorite
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#FF6C0E] text-white font-medium px-8 py-3 rounded-md transition hover:bg-orange-700 flex-grow md:flex-grow-0">
              <FiShoppingCart />
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mt-10">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-8 py-2 rounded-lg transition ${
              activeTab === "description"
                ? "bg-[#8CA36A] text-white font-medium"
                : "bg-white text-[#8E9299] border border-[#E9E9E9]"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-8 py-2 rounded-lg transition ${
              activeTab === "reviews"
                ? "bg-[#8CA36A] text-white font-medium"
                : "bg-white text-[#8E9299] border border-[#E9E9E9]"
            }`}
          >
            Reviews (1)
          </button>
        </div>

        {/* Description Content */}
        <div className="mt-4 bg-[#F4F4F4] rounded-xl p-6 md:p-8">
          {activeTab === "description" ? (
            <div className="text-[#757575] space-y-4">
              <p>{product.description}</p>
              <p>
                Perfect for smoothies, desserts, curries, and more — let the
                natural sweetness of the {product.productName.toLowerCase()}
                elevate your recipes. Enjoy the tropical goodness in its purest
                form, directly from nature.
              </p>
            </div>
          ) : (
            <div className="text-[#757575]">
              <p className="font-medium">Customer Review (1)</p>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 font-medium">John Doe</span>
                </div>
                <p>
                  This {product.productName.toLowerCase()} is amazing! Fresh,
                  flavorful, and arrived in perfect condition.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
