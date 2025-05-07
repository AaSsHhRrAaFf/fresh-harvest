// src/app/about/page.js
import AboutSection from "@/components/sections/AboutSection";

export default function AboutPage() {
  return (
    <main>
      <div className="pt-20 pb-10 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1d2133] mb-2">
            About Us
          </h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Learn more about Fresh Harvests, our mission, and our journey to
            bring fresh produce to your table.
          </p>
        </div>
      </div>

      <AboutSection />
      <MissionAndValues />
      

      {/* You can add more sections here specific to the about page */}
    </main>
  );
}
// Add this component below AboutSection in your about/page.js

function MissionAndValues() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#e8f0df] text-[#5a8a3f] text-sm font-semibold py-1 px-4 rounded-full mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2133] mb-4">
            Our Mission & Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f5f5f7] p-6 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Quality First</h3>
            <p className="text-gray-600">
              We ensure that every fruit and vegetable that reaches your
              doorstep meets our high-quality standards.
            </p>
          </div>

          <div className="bg-[#f5f5f7] p-6 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We are committed to sustainable farming practices that protect our
              environment and support local communities.
            </p>
          </div>

          <div className="bg-[#f5f5f7] p-6 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Community Support</h3>
            <p className="text-gray-600">
              By partnering with local farmers, we help build stronger
              communities and support local economies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

