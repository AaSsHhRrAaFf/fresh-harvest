import Image from "next/image";
import Link from "next/link";
import ProductCard from "../ui/ProductCard";

const AboutSection = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute right-6/12">
        <Image
          src="/images/leap.png"
          alt="Decorative leaf"
          width={60}
          height={50}
          className="opacity-60"
        />
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left column - Farmer image with overlays */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-full bg-green-100 ">
            <Image
              src="/images/about/farmer-box.png"
              alt="Farmer with fresh produce"
              fill
              className="object-cover"
              priority
            />

            {/* Logo badge overlay */}
            <div className="absolute top-1/2 right-0  transform translate-y-8/12 -translate-x-2/12 bg-white rounded-lg shadow-md py-2 px-4 flex items-center justify-center gap-5 z-10">
              <div className="flex items-center">
                <Image
                  src="/images/Logo.png"
                  alt="Fresh Harvests Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2 font-medium text-gray-800">
                  Fresh Harvests
                </span>
              </div>
            </div>

            {/* Product card overlay */}
            <div className="w-[150.4px] h-[192px] bg-white rounded-xl shadow-[0_0_0_2px_rgba(44,137,255,0.12)] flex flex-col items-center pt-4 pb-3 px-2 absolute bottom-5 right-0 transform translate-y-2/5">
              <div className="w-[110px] h-[78px] bg-[#F5F7FA] rounded-xl flex items-center justify-center mb-3">
                <img
                  src="/images/products/mushrooms.png"
                  alt="Mushroom"
                  className="object-contain max-h-[70px]"
                />
              </div>
              <div className="flex flex-col items-center flex-1">
                <span className="font-semibold text-sm text-gray-800 mb-0.5">
                  Mushroom
                </span>
                <span className="text-xs text-gray-500 mb-3">$2.3/kg</span>
                <button className="w-full py-1.5 text-sm font-medium bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - About text content */}
        <div className="flex flex-col justify-center">
          <span className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-sm inline-block w-fit mb-2">
            About us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Fresh Harvest
          </h2>

          <p className="text-gray-600 mb-6">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>

          <div>
            <Link
              href="/about"
              className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300 inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
