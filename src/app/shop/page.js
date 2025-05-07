// src/app/shop/page.js
"use client";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { fetchProducts, fetchCategories } from "@/services/productService";
import Toast from "@/components/ui/Toast";
import { useSelector } from "react-redux";

const PRODUCTS_PER_PAGE = 9;

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [toast, setToast] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { isAuthenticated } = useSelector((state) => state.auth);

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

  // Filter products based on category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => {
          const category = categories.find((c) => c.id === product.categoryId);
          return category?.categoryName === activeCategory;
        });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto max-w-7xl py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Shop Our Products
      </h1>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => {
            setActiveCategory("All");
            setCurrentPage(1);
          }}
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
            onClick={() => {
              setActiveCategory(category.categoryName);
              setCurrentPage(1);
            }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg h-72 animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        /* Products grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showToast={showToast}
              />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500 py-12">
              No products found in this category.
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`w-10 h-10 rounded-md ${
                currentPage === i + 1
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md border border-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Toast notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
