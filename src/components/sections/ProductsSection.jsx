// Updated src/components/sections/ProductsSection.jsx
"use client";
import { useState, useEffect } from "react";
import ProductCard from "../ui/ProductCard";
import Link from "next/link";
import Toast from "../ui/Toast";
import { fetchProducts, fetchCategories } from "@/services/productService";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const productData = await fetchProducts();
        const categoryData = await fetchCategories();

        if (productData.success) {
          setProducts(productData.data);
        }

        if (categoryData.success) {
          setCategories(categoryData.data);
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Display toast notification
  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  // Handle add to cart with toast notification
  const handleAddToCart = (product) => {
    // This would normally be handled by the Redux action
    // but we can add a notification here
    showToast(`${product.productName} added to cart!`, "success");
  };

  // Filter products based on category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => {
          const category = categories.find((c) => c.id === product.categoryId);
          return category?.categoryName === activeCategory;
        });

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Green badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
            Our Products
          </span>
        </div>

        {/* Section heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Fresh Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-md ${
              activeCategory === "All"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 border border-gray-200"
            } transition duration-200`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.categoryName)}
              className={`px-6 py-2 rounded-md ${
                activeCategory === category.categoryName
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              } transition duration-200`}
            >
              {category.categoryName}
            </button>
          ))}
        </div>

        {/* Error state */}
        {error && (
          <div className="text-center text-red-500 mb-8">
            {error}. Please try again later.
          </div>
        )}

        {/* Loading state */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-lg h-72 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          /* Products grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
               // isHighlighted={index === 1} // Highlight the second product as in the design
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        )}

        {/* See all products button */}
        <div className="flex justify-center">
          <Link
            href="/shop"
            className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg transition duration-200"
          >
            See All Products
          </Link>
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default ProductsSection;


