import Image from "next/image";
import Link from "next/link";
import ProductCard from "../ui/ProductCard";

const AboutSection = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* "See All Products" Button at top */}
      <div className="flex justify-center mb-10">
        <Link
          href="/products"
          className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
        >
          See All Products
        </Link>
      </div>

      {/* Decorative leaf */}
      <div className="absolute right-1/4 top-1/4">
        <Image
          src="/images/about/leaf-decoration.svg"
          alt="Decorative leaf"
          width={40}
          height={40}
          className="opacity-60"
        />
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left column - Farmer image with overlays */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-full bg-green-100 overflow-hidden">
            <Image
              src="/images/about/farmer-box.png"
              alt="Farmer with fresh produce"
              fill
              className="object-cover"
              priority
            />

            {/* Logo badge overlay */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 bg-white rounded-lg shadow-md py-2 px-4 flex items-center z-10">
              <div className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Fresh Harvests Logo"
                  width={24}
                  height={24}
                />
                <span className="ml-2 font-medium text-gray-800">
                  Fresh Harvests
                </span>
              </div>

              {/* Decorative sparkle */}
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 text-orange-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L9.5 8.5 2 9.5 7 14 5.5 22 12 18 18.5 22 17 14 22 9.5 14.5 8.5z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Product card overlay */}
            <div className="absolute bottom-5 right-0 transform translate-x-1/4">
              <ProductCard
                name="Mushroom"
                price={2.3}
                image="/images/products/mushrooms.png"
                compact={true}
              />
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
