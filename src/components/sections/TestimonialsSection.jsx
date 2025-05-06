// components/sections/TestimonialsSection.jsx
import Image from "next/image";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative leaf elements */}
      <div className="absolute top-10 left-10">
        <Image
          src="/images/leap.png"
          alt="Decorative leaf"
          width={90}
          height={90}
          className="opacity-80"
        />
      </div>
      <div className="absolute top-10 right-10 transform rotate-90">
        <Image
          src="/images/leap.png"
          alt="Decorative leaf"
          width={90}
          height={90}
          className="opacity-80"
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#e8f0df] text-[#5a8a3f] text-sm font-semibold py-1 px-4 rounded-full mb-4">
            Testimonial
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2133] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Don't just take our word for it—here's what some of our customers
            have to say about their experience with Fresh Harvest:
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-10">
          {/* Customer Image */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative">
              {/* Orange quote marks */}
              <div className="absolute -top-6 right-0 md:-right-6">
                <div className="flex gap-1">
                  <span className="w-4 h-4 rounded-full bg-[#ff6b35]"></span>
                  <span className="w-4 h-4 rounded-full bg-[#ff6b35]"></span>
                  <span className="w-4 h-4 rounded-full bg-[#ff6b35]"></span>
                </div>
              </div>

              <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden">
                <Image
                  src="/images/testimonials/customer1.png"
                  alt="Customer testimonial"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="w-full md:w-7/12">
            <div className="bg-[#f5f5f7] rounded-2xl p-6 md:p-8">
              <p className="text-[#444444] mb-6 text-base md:text-lg leading-relaxed">
                "I absolutely love Fresh Harvest! The quality of their produce
                is outstanding. It's always fresh, flavorful, and delicious. The
                convenience of ordering online and having it delivered to my
                doorstep saves me so much time. Fresh Harvest has become my
                go-to for all my fruit and vegetable needs."
              </p>
              <div className="flex items-center">
                <p className="font-bold text-[#1d2133]">Jane Doe</p>
                <span className="mx-2 text-gray-500">-</span>
                <p className="text-gray-600">Professional chef</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            className="w-3 h-3 rounded-full bg-[#5a8a3f]"
            aria-label="View testimonial 1"
          ></button>
          <button
            className="w-3 h-3 rounded-full bg-gray-300"
            aria-label="View testimonial 2"
          ></button>
          <button
            className="w-3 h-3 rounded-full bg-gray-300"
            aria-label="View testimonial 3"
          ></button>
        </div>

        {/* Social Proof Counter - Optional based on your design preference */}
        <div className="flex justify-center mt-6">
          <div className="bg-[#3498db] text-white text-sm px-4 py-2 rounded-full flex items-center">
            <span>1013 Hug</span>
            <span className="mx-2 h-4 w-px bg-white/40"></span>
            <span>718 Hug</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
