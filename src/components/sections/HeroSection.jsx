// src/components/sections/HeroSection.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:py-12 lg:py-16">
      <div className="absolute inset-0 flex">
        <div
          style={{
            width: "80%",
            backgroundImage: "url(/images/hero/bg01.png)",
          }}
          className="bg-cover bg-left"
        ></div>
        <div
          style={{
            width: "20%",
            backgroundImage: "url(/images/hero/bg02.png)",
          }}
          className="bg-cover bg-right"
        ></div>
      </div>

      {/* Decorative Leaves - adjust positioning as needed */}
      <div className="absolute top-0 left-10 md:left-20 z-0">
        <Image
          src="/images/hero/leaves.png"
          alt="Decorative leaf"
          width={120}
          height={120}
          className="opacity-70"
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {" "}
        {/* Ensure content is above the background */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="md:col-span-7 z-10 flex flex-col justify-center">
            {/* Welcome Tag */}
            <div className="inline-flex items-center bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm mb-6 w-max">
              Welcome to Fresh Harvest
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Fresh Fruits and
              <br />
              Vegetables
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-8 max-w-lg">
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables directly from
              local farms to your table.
            </p>

            {/* CTA Button */}
            <div className="flex">
              <Link
                href="/shop"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-medium shadow-md transition-colors mb-8 w-max"
              >
                Shop Now
              </Link>
            </div>

            {/* Special Offer Card with Arrow */}
            <div className="relative mb-10">
              <div className="absolute -top-8 right-20">
                <Image
                  src="/images/icons/arrow.svg"
                  alt="Arrow pointing to special offer"
                  width={60}
                  height={60}
                />
              </div>

              <div className="bg-gray-50 rounded-xl p-4 shadow-sm max-w-md flex justify-between items-center">
                <div>
                  <span className="text-green-600 text-sm">Special Offer</span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Fresh Salad
                  </h3>
                  <p className="text-lg text-gray-700">
                    Up to <span className="text-2xl font-bold">70%</span> off
                  </p>
                  <div className="bg-green-600 text-white text-xs py-1 px-3 rounded-full inline-block mt-1">
                    CODE: FRESH25
                  </div>
                </div>
                <div className="ml-4">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden">
                    <Image
                      src="/images/seasonal/fruit-bundle.png"
                      alt="Fresh salad"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* App Download Section */}
            <div>
              <p className="text-gray-600 text-sm mb-3">Download App:</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/icons/app-store.png"
                    alt="Download on App Store"
                    width={120}
                    height={40}
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/icons/play-store.png"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="md:col-span-5 flex justify-center md:justify-end items-center relative min-h-[400px] md:min-h-[500px] lg:min-h-0">
            <div className="relative z-10">
              <Image
                src="/images/hero/hero-woman.png"
                alt="Woman holding fresh produce"
                width={500}
                height={600}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
