import React from "react";
import Image from "next/image";
import CountdownTimer from "../ui/CountdownTimer";

const SeasonalBundle = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#F9F9F9] z-0">
        {/* Background pattern images */}
        <Image
          src="/images/seasonal/seasonal-bg.jpg"
          alt="Background pattern"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute top-0 right-0">
          <Image
            src="/images/seasonal/bg-patterns-top-right.png"
            alt="Top right pattern"
            width={825}
            height={480}
            className="opacity-80"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src="/images/seasonal/bg-patterns-left-bottom.png"
            alt="Bottom left pattern"
            width={825}
            height={480}
            className="opacity-80"
          />
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src="/images/seasonal/seasonal-bottom-left.png"
            alt="Bottom left accent"
            width={150}
            height={120}
          />
        </div>
        <div className="absolute top-[31px] right-[32px] -rotate-[162.14deg] md:top-16 md:right-2/5">
          <Image
            src="/images/seasonal/green-leap-small.png"
            alt="Small green leaf"
            width={90}
            height={70}
          />
        </div>
        <div className="absolute bottom-10 right-5 md:bottom-16 md:right-0">
          <Image
            src="/images/seasonal/green-leap-big.png"
            alt="Big green leaf"
            width={120}
            height={120}
          />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <Image
            src="/images/seasonal/orange-line.png"
            alt="Orange accent"
            width={50}
            height={50}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left content - Text and Countdown */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              Special Offer
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Seasonal Fruit Bundle
            </h2>

            <p className="text-xl md:text-2xl font-medium">
              Discount up to{" "}
              <span className="text-orange-500 font-bold">80% OFF</span>
            </p>

            {/* Countdown Timer Component */}
            <CountdownTimer />

            {/* Promo Code */}
            <div className="inline-block bg-green-800 text-white px-6 py-3 rounded-full font-medium">
              <span>CODE : </span>
              <span className="text-yellow-300">FRESH28</span>
            </div>
          </div>

          {/* Right content - Fruit Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/seasonal/fruit-bundle.png"
                alt="Seasonal Fruit Bundle"
                width={500}
                height={400}
                className="object-contain z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalBundle;
