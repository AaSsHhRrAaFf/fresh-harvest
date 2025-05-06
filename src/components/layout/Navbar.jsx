// src/components/layout/Navbar.jsx
"use client"
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginModal from "../ui/LoginModal";

const Navbar = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-8 py-4 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
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
            className="relative text-gray-900 font-medium pb-1 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-600 hover:text-gray-900 transition-colors pb-1"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors pb-1"
          >
            About us
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-gray-900 transition-colors pb-1"
          >
            Blog
          </Link>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/favorites"
            className="flex items-center text-gray-600 hover:text-gray-900"
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
            className="flex items-center text-gray-600 hover:text-gray-900 relative"
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
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
          </Link>

          <button
            onClick={() => setLoginModalOpen(true)}
            className="text-green-600 border border-green-600 rounded-md px-4 py-1.5 text-sm hover:bg-green-50 transition-colors"
          >
            Sign in
          </button>
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
      />
    </nav>
  );
};

export default Navbar;
