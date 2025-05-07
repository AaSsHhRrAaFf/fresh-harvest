// src/components/sections/RelatedProducts.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const RelatedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://code-commando.com/api/v1/products"
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          // Only take the first 4 products
          setProducts(result.data.slice(0, 4));
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle image loading errors
  const getFixedImageUrl = (url) => {
    if (!url) return "/images/products/placeholder.png";

    // Fix for the example URL which has an extra '.com' in it
    if (url.includes("i.ibb.co.com")) {
      return url.replace("i.ibb.co.com", "i.ibb.co");
    }

    return url;
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Green badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#EDF7E4] text-[#8CA36A] px-5 py-1.5 rounded-full text-sm font-medium">
            Our Products
          </span>
        </div>

        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23233B] mb-3">
            Related products
          </h2>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mx-auto animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="text-center text-red-500 py-12">
            <p>Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products grid */}
        {!loading && !error && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#F7F8F8] rounded-xl p-4 flex flex-col items-center"
              >
                <div className="w-full h-[78px] flex items-center justify-center">
                  <Image
                    src={getFixedImageUrl(product.images?.[0])}
                    alt={product.productName || "Product"}
                    width={78}
                    height={78}
                    className="object-contain"
                    onError={(e) => {
                      e.target.src = "/images/products/placeholder.png";
                    }}
                  />
                </div>

                <h3 className="font-medium text-[#23233B] text-base mt-4">
                  {product.productName || "Unknown Product"}
                </h3>

                <p className="text-[#8E9299] text-sm mt-2">
                  ${product.price || 0}/kg
                </p>

                <button
                  className="w-full py-2 px-4 mt-4 rounded-md transition duration-200
                    bg-white text-gray-900 border border-[#E9E9E9] hover:text-white hover:bg-orange-600"
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        )}

        {/* No products found */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No products available.
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
