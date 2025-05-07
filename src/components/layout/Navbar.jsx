

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LoginModal from "../ui/LoginModal";
import RegisterModal from "../ui/RegisterModal";
import Toast from "../ui/Toast";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/feature/authSlice";

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenLoginModal = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };

  const handleOpenRegisterModal = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
  };

  const handleCloseModals = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setToast({
      message: "Successfully logged out!",
      type: "success",
    });
    setIsDropdownOpen(false);
  };

  // Check if the path is active
  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const cartItemCount = items ? items.length : 0;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-8 py-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="Fresh Harvests Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="font-bold text-xl text-gray-900">
            Fresh Harvests
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            href="/"
            className={`relative text-gray-900 font-medium pb-1 ${
              isActive("/")
                ? "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`relative text-gray-900 font-medium pb-1 ${
              isActive("/shop")
                ? "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className={`relative text-gray-900 font-medium pb-1 ${
              isActive("/about")
                ? "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }`}
          >
            About us
          </Link>
          <Link
            href="/blog"
            className={`relative text-gray-900 font-medium pb-1 ${
              isActive("/blog")
                ? "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0"
                : "text-gray-600 hover:text-gray-900 transition-colors"
            }`}
          >
            Blog
          </Link>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/favorites"
            className={`flex items-center ${
              isActive("/favorites")
                ? "text-green-600 font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-sm">Favorites</span>
          </Link>

          <Link
            href="/cart"
            className={`flex items-center relative ${
              isActive("/cart")
                ? "text-green-600 font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-800 hover:text-green-600 transition-colors"
              >
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-2">
                  {user?.fullName?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="text-sm font-medium">
                  {user?.fullName?.split(" ")[0] || "User"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium">{user?.fullName}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setLoginModalOpen(true)}
              className="text-green-600 border border-green-600 rounded-md px-4 py-1.5 text-sm hover:bg-green-50 transition-colors"
            >
              Sign in
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSwitchToRegister={handleOpenRegisterModal}
        setToast={setToast}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={handleCloseModals}
        onSwitchToLogin={handleOpenLoginModal}
        setToast={setToast}
      />

      {/* Toast notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </nav>
  );
};

export default Navbar;
