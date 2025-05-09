// src/components/layout/Footer.jsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F7F8F8] w-full pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & App Download */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <Image
                src="/images/Logo.png"
                alt="Fresh Harvests Logo"
                width={54}
                height={54}
              />
              <h2 className="text-[#23233B] text-2xl md:text-3xl font-bold ml-4">
                Fresh Harvests
              </h2>
            </div>

            <div className="mt-6">
              <p className="text-[#23233B] font-medium text-base mb-3">
                Download App:
              </p>
              <div className="flex space-x-4">
                <Image
                  src="/images/footer/appstore.png"
                  alt="Download on App Store"
                  width={140}
                  height={44}
                  className="h-11 w-auto"
                />
                <Image
                  src="/images/footer/googleplay.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={44}
                  className="h-11 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links 1 */}
          <div>
            <h3 className="text-[#23233B] text-xl font-bold mb-5">
              Quick links 1
            </h3>
            <ul className="space-y-2">
              {["Home", "Shop", "About us", "Blog", "Detail Blog"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href={
                        link === "Home"
                          ? "/"
                          : `/${link.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-[#23233B] hover:text-[#A5C76B] transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Quick Links 2 */}
          <div>
            <h3 className="text-[#23233B] text-xl font-bold mb-5">
              Quick links 2
            </h3>
            <ul className="space-y-2">
              {["Favorites", "Cart", "Sign in", "Register"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-[#23233B] hover:text-[#A5C76B] transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Contact & Payment Methods */}
          <div>
            <h3 className="text-[#23233B] text-xl font-bold mb-5">
              Contact us
            </h3>

            {/* Contact Information */}
            <div className="space-y-3 mb-7">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center text-[#A5C76B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-[#23233B]">1234 5678 90</span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center text-[#A5C76B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-[#23233B]">
                  Freshharvests@gmail.com
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center text-[#A5C76B]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-[#23233B]">
                  Tanjung Sari Street, Pontianak, Indonesia
                </span>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <p className="text-[#23233B] font-medium text-base mb-3">
                Accepted Payment Methods:
              </p>
              <div className="flex space-x-4">
                <div className="bg-white rounded-md shadow-sm p-2 flex items-center justify-center h-9">
                  <Image
                    src="/images/footer/visa.png"
                    alt="Visa"
                    width={50}
                    height={16}
                    className="h-4 w-auto"
                  />
                </div>
                <div className="bg-white rounded-md shadow-sm p-2 flex items-center justify-center h-9">
                  <Image
                    src="/images/footer/paypal.png"
                    alt="PayPal"
                    width={50}
                    height={16}
                    className="h-4 w-auto"
                  />
                </div>
                <div className="bg-white rounded-md shadow-sm p-2 flex items-center justify-center h-9">
                  <Image
                    src="/images/footer/apple-pay.png"
                    alt="Apple Pay"
                    width={40}
                    height={16}
                    className="h-4 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E1E3E4] my-10"></div>

        {/* Copyright & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#8E9299] text-sm md:text-base mb-4 md:mb-0">
            © Copyright 2024, All Rights Reserved by Banana Studio
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {/* Twitter */}
            <a
              href="#"
              className="bg-[#23233B] rounded-full w-10 h-10 flex items-center justify-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="bg-[#23233B] rounded-full w-10 h-10 flex items-center justify-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="bg-[#23233B] rounded-full w-10 h-10 flex items-center justify-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
